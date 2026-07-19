// eHive lead collector — Vercel serverless function (stub)
// ============================================================================
// Point FORM_ENDPOINT in app.js to "/api/lead" (same-origin, no CORS needed)
// once this file is deployed. It receives every form payload the site sends:
//   { form: "get-started" | "booking" | "calculator-breakdown" | "newsletter",
//     ...fields, source_page, referrer, timestamp, user_agent }
//
// Wire the TODO you prefer, then remove the others:
//   A) Forward to your CRM (HubSpot / Pipedrive / Zoho webhook)
//   B) Forward to Formspree / Basin from the server side
//   C) Write to a database (Vercel Postgres / Supabase / PlanetScale)
//   D) Send a plain notification email (Resend / Postmark / SES)
// ============================================================================

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method-not-allowed" });
  }

  const payload = req.body || {};
  if (!payload.form || !payload.email) {
    return res.status(400).json({ ok: false, error: "missing-fields" });
  }

  try {
    // TODO(A): CRM webhook
    // await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    // TODO(D): notification email via Resend
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "site@ehive.ae",
    //     to: ["hello@ehive.ae"],               // COPY-NEEDED: email-contact
    //     subject: `[eHive] ${payload.form} — ${payload.email}`,
    //     text: JSON.stringify(payload, null, 2),
    //   }),
    // });

    console.log("[lead]", JSON.stringify(payload)); // visible in Vercel logs
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[lead] failed:", err);
    return res.status(502).json({ ok: false, error: "upstream-failed" });
  }
}
