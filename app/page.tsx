// app/page.tsx
import { Metadata } from "next";
import HomeClient from "@/components/home-client";

export const metadata: Metadata = {
  title: "Free QR Code Generator - Create Custom QR Codes Online",
  description: "Generate free QR codes for URLs, WiFi, WhatsApp, UPI payments, emails, and text. Customize colors, add logos, and download as PNG.",
};

export default function HomePage() {
  return <HomeClient />;
}