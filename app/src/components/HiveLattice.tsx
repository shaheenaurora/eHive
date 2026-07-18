"use client";

import { useEffect, useRef } from "react";

/**
 * HiveLattice — the abstract "connection forming" motion background.
 *
 * Scattered points ease into a hexagonal (hive) lattice, the formation
 * rippling outward from the center of the frame. Once formed, the lattice
 * idles with a gentle drift and an occasional pulse of light travelling
 * along an edge. Renders a static, fully-formed frame for visitors who
 * prefer reduced motion.
 */

type LatticeNode = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  delay: number;
  phase: number;
  gold: boolean;
};

type Edge = { a: number; b: number };
type Point = { x: number; y: number; p: number };

const FORM_SECONDS = 2.1;

export default function HiveLattice({
  className = "",
  /** start already formed (for reuse outside the hero) */
  instant = false,
  /** scales all line/point opacity */
  intensity = 1,
}: {
  className?: string;
  instant?: boolean;
  intensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl || !canvasEl.parentElement) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;
    const parent: HTMLElement = canvasEl.parentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let running = false;
    let start = 0;
    let w = 0;
    let h = 0;
    let nodes: LatticeNode[] = [];
    let edges: Edge[] = [];
    let points: Point[] = [];
    let pulses: { edge: number; t0: number }[] = [];
    let lastPulse = 0;

    const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = Math.max(84, Math.min(120, w / 15));
      const rowH = spacing * 0.866; // sin(60°) — equilateral lattice
      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / rowH) + 2;
      const ox = (w - (cols - 1) * spacing) / 2;
      const oy = (h - (rows - 1) * rowH) / 2;
      const cx = w / 2;
      const cy = h / 2;
      const maxD = Math.hypot(cx, cy);

      nodes = [];
      edges = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const tx = ox + c * spacing + (r % 2 ? spacing / 2 : 0);
          const ty = oy + r * rowH;
          const d = Math.hypot(tx - cx, ty - cy) / maxD;
          nodes.push({
            sx: Math.random() * w,
            sy: Math.random() * h,
            tx,
            ty,
            delay: d * 1.5 + Math.random() * 0.35,
            phase: Math.random() * Math.PI * 2,
            gold: Math.random() < 0.09,
          });
        }
      }

      const idx = (r: number, c: number) => r * cols + c;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = idx(r, c);
          if (c + 1 < cols) edges.push({ a: i, b: idx(r, c + 1) });
          if (r + 1 < rows) {
            const off = r % 2 ? 0 : -1;
            if (c + off >= 0) edges.push({ a: i, b: idx(r + 1, c + off) });
            if (c + off + 1 < cols)
              edges.push({ a: i, b: idx(r + 1, c + off + 1) });
          }
        }
      }

      points = nodes.map(() => ({ x: 0, y: 0, p: 0 }));
      pulses = [];
    }

    function position(n: LatticeNode, t: number): Point {
      const p =
        instant || reduced
          ? 1
          : easeOut(Math.min(1, Math.max(0, (t - n.delay) / FORM_SECONDS)));
      const drift = reduced ? 0 : p * 3.5;
      return {
        x:
          n.sx +
          (n.tx - n.sx) * p +
          Math.sin(t * 0.4 + n.phase) * drift,
        y:
          n.sy +
          (n.ty - n.sy) * p +
          Math.cos(t * 0.33 + n.phase * 1.7) * drift,
        p,
      };
    }

    function frame(now: number) {
      if (!running) return;
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) points[i] = position(nodes[i], t);

      ctx.lineWidth = 1;
      for (const e of edges) {
        const A = points[e.a];
        const B = points[e.b];
        const alpha = 0.16 * Math.min(A.p, B.p) * intensity;
        if (alpha < 0.004) continue;
        ctx.strokeStyle = `rgba(184, 134, 46, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        const P = points[i];
        if (P.p < 0.02) continue;
        if (nodes[i].gold) {
          ctx.fillStyle = `rgba(210, 162, 76, ${0.85 * P.p * intensity})`;
          ctx.beginPath();
          ctx.arc(P.x, P.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(250, 248, 243, ${0.42 * P.p * intensity})`;
          ctx.beginPath();
          ctx.arc(P.x, P.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // occasional pulse of light along a fully-formed edge
      if (!reduced && t > FORM_SECONDS + 1.2 && now - lastPulse > 2600) {
        lastPulse = now;
        for (let k = 0; k < 10; k++) {
          const ei = Math.floor(Math.random() * edges.length);
          if (
            Math.min(points[edges[ei].a].p, points[edges[ei].b].p) > 0.98
          ) {
            pulses.push({ edge: ei, t0: now });
            break;
          }
        }
        if (pulses.length > 2) pulses.shift();
      }
      pulses = pulses.filter((pl) => now - pl.t0 < 1400);
      for (const pl of pulses) {
        const e = edges[pl.edge];
        const A = points[e.a];
        const B = points[e.b];
        const k = (now - pl.t0) / 1400;
        const fade = Math.sin(k * Math.PI);
        ctx.fillStyle = `rgba(210, 162, 76, ${0.9 * fade * intensity})`;
        ctx.beginPath();
        ctx.arc(
          A.x + (B.x - A.x) * k,
          A.y + (B.y - A.y) * k,
          2.4,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      if (reduced) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function startLoop() {
      start = performance.now() - (instant ? 4000 : 0);
      raf = requestAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          startLoop();
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      build();
    });
    ro.observe(parent);

    build();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [instant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
