import Link from "next/link";
import { QrCode } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/generate/", label: "Generate QR" },
    { href: "/about/", label: "About Us" },
    { href: "/blog/", label: "Blog" },
  ],
  Support: [
    { href: "/contact/", label: "Contact" },
    { href: "/privacy/", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <QrCode className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">QRGen</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free, fast, and secure QR code generator for all your needs.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} QRGen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
