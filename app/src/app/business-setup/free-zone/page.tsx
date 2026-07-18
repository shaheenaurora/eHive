import type { Metadata } from "next";
import JurisdictionPage from "@/components/JurisdictionPage";

export const metadata: Metadata = {
  title: "Free Zone Company Setup — eHive Business Setup",
  description:
    "100% foreign ownership, full repatriation of profits, and typically faster setup — the free zone path, mapped end to end.",
};

export default function FreeZonePage() {
  return (
    <JurisdictionPage
      content={{
        eyebrow: "Business Setup · Free Zone",
        title: "Your company, wholly yours.",
        sub: "100% foreign ownership, full repatriation of profits, and typically the fastest route from idea to incorporated.",
        overview:
          "A UAE free zone company is the most common first structure for international founders: you own the entire company, you keep what you earn, and the licensing process is designed to move quickly. The trade-off is market access — free zone companies trade internationally and within their zone, and serve the wider UAE market through the right activity and structure. We map that before you commit.",
        blocks: [
          {
            heading: "Business activities permitted",
            items: [
              "Commercial and trading licences for import, export, and e-commerce",
              "Professional and service licences for consultancies, agencies, and specialists",
              "Industrial licences in zones with production facilities",
              "Most zones allow several related activities under one licence",
            ],
          },
          {
            heading: "Registration, step by step",
            items: [
              "Choose the zone and activity with your dedicated expert",
              "Trade name reservation and initial approval — typically days, not weeks",
              "Documents and application: passport copies, brief business plan",
              "Licence and establishment card issued — your company exists",
              "Immigration file opened, then your residence visa",
            ],
          },
          {
            heading: "Visa eligibility and process",
            items: [
              "Visa allocation scales with your licence package and office option",
              "Investor/partner visas for shareholders, employment visas for staff",
              "Entry permit → status change → medical and Emirates ID → residence visa",
              "Dependant visas available once your own residence is active",
            ],
          },
          {
            heading: "What it's like to run",
            items: [
              "Annual licence renewal — your expert tracks the date and handles the filing",
              "Corporate tax registration still applies: 9% above AED 375,000 taxable profit",
              "Bank account opening supported end to end — the step most founders dread, handled for you",
              "No physical office required in most zones; flexi-desk options keep first-year costs lean",
            ],
          },
        ],
        zones: [
          {
            name: "Service & consultancy zones",
            note: "For advisors, creatives, tech and professional services — the leanest packages.",
            price: "From ~AED 12,500 / year",
          },
          {
            name: "Trading & e-commerce zones",
            note: "Commercial licences with import/export codes and fulfillment-friendly locations.",
            price: "From ~AED 15,000 / year",
          },
          {
            name: "Premium Dubai zones",
            note: "Address-prestige zones with broader activity lists and stronger bank acceptance.",
            price: "From ~AED 22,000 / year",
          },
        ],
        comparison: [
          {
            aspect: "Ownership",
            freeZone: "100% foreign ownership, always",
            mainland: "100% foreign ownership for most activities",
          },
          {
            aspect: "Market access",
            freeZone: "International + free zone; UAE market via structure",
            mainland: "Trade directly anywhere in the UAE",
          },
          {
            aspect: "Setup speed",
            freeZone: "Typically days once documents are ready",
            mainland: "Longer; external approvals for some activities",
          },
          {
            aspect: "Office",
            freeZone: "Flexi-desk or none required in most zones",
            mainland: "Physical office generally required",
          },
          {
            aspect: "Best for",
            freeZone: "International services, e-commerce, holding",
            mainland: "Local trade, retail, government contracts",
          },
        ],
        otherPathLabel: "Mainland company setup",
        otherPathHref: "/business-setup/mainland",
      }}
    />
  );
}
