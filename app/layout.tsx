import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
  },
  title: {
    default: "QR Code Generator - Free Custom QR Codes",
    template: "%s | QR Code Generator",
  },
  description: "Free online QR Code Generator. Create custom QR codes for URL, WiFi, WhatsApp, UPI Payment, Email, and Text. Download as PNG with custom colors and logos.",
  keywords: ["QR code generator", "free QR code", "custom QR code", "WiFi QR", "WhatsApp QR", "UPI QR code"],
  authors: [{ name: "QRGen" }],
  creator: "QRGen",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://qrcodegenerator.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "QR Code Generator",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@qrgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
