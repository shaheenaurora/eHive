"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return <p className="text-small text-gold-bright">Thank you — you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="w-full border border-ivory/20 bg-transparent px-4 py-2.5 text-[0.95rem] text-ivory placeholder:text-smoke/60 focus:border-gold-bright focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-gold px-5 py-2.5 text-[0.95rem] font-bold text-navy-deep transition-colors duration-300 hover:bg-gold-bright"
      >
        Subscribe
      </button>
    </form>
  );
}
