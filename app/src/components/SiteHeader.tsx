"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonLink from "./Button";

const NAV_LINKS = [
  { label: "Business Setup", href: "/business-setup" },
  { label: "Consulting", href: "/consulting" },
  { label: "eHive Circle", href: "/circle" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-ivory/10 bg-navy-deep/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" aria-label="eHive home" className="shrink-0">
            <Image
              src="/brand/ehive-wordmark.png"
              alt="eHive"
              width={108}
              height={37}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.95rem] text-ivory/75 transition-colors duration-300 hover:text-gold-bright"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              href="/login"
              className="text-[0.95rem] text-ivory/75 transition-colors duration-300 hover:text-ivory"
            >
              Login
            </Link>
            <ButtonLink href="/get-started" variant="solid" className="px-5 py-2.5">
              Get Started
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-ivory transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-ivory transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen, serif, unhurried */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-navy-deep px-8 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-h2 text-ivory transition-colors duration-300 hover:text-gold-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex flex-col gap-5">
          <ButtonLink href="/get-started" variant="solid" className="w-fit">
            Get Started
          </ButtonLink>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-ivory/70 transition-colors duration-300 hover:text-ivory"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
