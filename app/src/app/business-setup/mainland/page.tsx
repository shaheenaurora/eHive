import type { Metadata } from "next";
import JurisdictionPage from "@/components/JurisdictionPage";

export const metadata: Metadata = {
  title: "Mainland Company Setup — eHive Business Setup",
  description:
    "Wider market access and the ability to trade directly across the UAE — the mainland path, mapped end to end.",
};

export default function MainlandPage() {
  return (
    <JurisdictionPage
      content={{
        eyebrow: "Business Setup · Mainland",
        title: "The whole market, open to you.",
        sub: "A mainland licence lets you trade directly across the UAE — with clients, with government, and without structural workarounds.",
        overview:
          "A mainland (onshore) company is licensed by the emirate's Department of Economic Development and can do business anywhere in the UAE — the right structure when your customers are local, when you want to bid for government work, or when your activity simply needs it. Most activities now allow 100% foreign ownership; where they don't, we structure it properly rather than papering over it.",
        blocks: [
          {
            heading: "Business activities permitted",
            items: [
              "Commercial licences — trading, retail, general trading across the UAE",
              "Professional licences — services, consultancies, crafts, and practices",
              "Industrial licences — manufacturing and production",
              "Tourism licences — travel, hospitality, and experiences",
            ],
          },
          {
            heading: "Licence types and structuring",
            items: [
              "LLC — the standard vehicle for most mainland businesses",
              "Sole establishment for individual professionals",
              "Branch of a foreign company where a local entity isn't the goal",
              "Local sponsorship or corporate nominee only where the activity requires it — explained plainly, structured properly",
            ],
          },
          {
            heading: "Registration, step by step",
            items: [
              "Activity selection and trade name reservation with the DED",
              "Initial approval and, where needed, external authority approvals",
              "Office lease (Ejari) — required for most mainland licences",
              "Memorandum, licence issuance, and establishment card",
              "Immigration file, then residence visas for you and your team",
            ],
          },
          {
            heading: "Visa allocation",
            items: [
              "Visa quota generally scales with office size — larger space, more visas",
              "Investor visas for partners, employment visas for staff",
              "Same process as free zone: entry permit → status change → medical and Emirates ID",
              "Quota increases handled as your headcount grows",
            ],
          },
        ],
        zones: [
          {
            name: "Professional licence",
            note: "Services and consultancies selling into the UAE market directly.",
            price: "From ~AED 18,000 / year",
          },
          {
            name: "Commercial licence",
            note: "Trading and retail across the emirates, import codes included.",
            price: "From ~AED 25,000 / year",
          },
          {
            name: "General trading licence",
            note: "Multiple unrelated product lines under one licence.",
            price: "From ~AED 32,000 / year",
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
        otherPathLabel: "Free zone company setup",
        otherPathHref: "/business-setup/free-zone",
      }}
    />
  );
}
