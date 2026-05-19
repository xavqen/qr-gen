import { Metadata } from "next";
import QRGenerator from "@/components/qr-generator";
import AdSection from "@/components/ad-section";
import AffiliateBlock from "@/components/affiliate-block";

export const metadata: Metadata = {
  title: "Generate QR Code - URL, WiFi, WhatsApp, UPI & More",
  description: "Generate custom QR codes for URLs, WiFi networks, WhatsApp, UPI payments, emails, and text. Customize colors, add logos, and download as PNG.",
};

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Generate Your QR Code
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select a QR code type, fill in the details, customize the appearance, 
          and download your QR code instantly.
        </p>
      </div>

      <AdSection format="horizontal" className="mb-8" />

      <QRGenerator />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdSection format="square" />
        <AffiliateBlock />
      </div>
    </div>
  );
}
