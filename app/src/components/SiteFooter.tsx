import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const PILLAR_LINKS = [
  { label: "Business Setup", href: "/business-setup" },
  { label: "Consulting", href: "/consulting" },
  { label: "eHive Circle", href: "/circle" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership & Team", href: "/about/team" },
  { label: "Join the Network", href: "/careers" },
  { label: "Insights — The Hive Journal", href: "/insights" },
];

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-navy-deep text-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand + purpose */}
          <div className="md:col-span-5">
            <Image
              src="/brand/ehive-wordmark.png"
              alt="eHive"
              width={132}
              height={45}
              className="h-9 w-auto"
            />
            <p className="mt-7 max-w-sm text-small leading-relaxed text-smoke">
              To advance the human race by enabling individuals and
              organisations to do better — sustainably, relevantly, and
              beneficially.
            </p>
            <p className="mt-6 text-small text-smoke">
              Dubai, UAE — expanding across the region.
            </p>
          </div>

          {/* Link columns */}
          <nav aria-label="Pillars" className="md:col-span-2">
            <h2 className="eyebrow">Pillars</h2>
            <ul className="mt-6 space-y-3.5">
              {PILLAR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-ivory/75 transition-colors duration-300 hover:text-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="eyebrow">Company</h2>
            <ul className="mt-6 space-y-3.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-ivory/75 transition-colors duration-300 hover:text-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h2 className="eyebrow">Stay close</h2>
            <p className="mt-6 text-small leading-relaxed text-smoke">
              Occasional thinking from the Hive — no noise.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-small text-smoke md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} eHive. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-ivory">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-ivory">
              Terms
            </Link>
            <Link href="/login" className="transition-colors duration-300 hover:text-ivory">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
