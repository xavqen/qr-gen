import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSection from "@/components/ad-section";

export const metadata: Metadata = {
  title: "Blog - QR Code Tips, Guides & Best Practices",
  description: "Learn how to use QR codes effectively for marketing, payments, and business. Expert tips and comprehensive guides.",
};

const posts = [
  {
    slug: "what-is-qr-code",
    title: "What is a QR Code? Complete Guide 2024",
    excerpt: "Learn everything about QR codes, how they work, and their various applications in modern business and daily life.",
    date: "2024-05-15",
    category: "Guide",
  },
  {
    slug: "qr-code-marketing",
    title: "10 QR Code Marketing Strategies That Work",
    excerpt: "Discover proven strategies to leverage QR codes for your marketing campaigns and drive better engagement.",
    date: "2024-05-10",
    category: "Marketing",
  },
  {
    slug: "upi-qr-payments",
    title: "How to Create UPI QR Codes for Your Business",
    excerpt: "Step-by-step guide to generating UPI payment QR codes for seamless digital transactions in India.",
    date: "2024-05-05",
    category: "Payments",
  },
  {
    slug: "wifi-qr-setup",
    title: "Share WiFi with QR Codes: The Easy Way",
    excerpt: "Simplify guest WiFi access by creating QR codes. No more typing long passwords.",
    date: "2024-04-28",
    category: "Tutorial",
  },
  {
    slug: "custom-qr-design",
    title: "Design Tips for Custom Branded QR Codes",
    excerpt: "Learn how to design QR codes that match your brand while maintaining scan reliability.",
    date: "2024-04-20",
    category: "Design",
  },
  {
    slug: "qr-code-security",
    title: "QR Code Security: What You Need to Know",
    excerpt: "Understand the security implications of QR codes and how to protect yourself from malicious codes.",
    date: "2024-04-15",
    category: "Security",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">QR Code Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expert tips, comprehensive guides, and the latest trends in QR code technology
        </p>
      </div>

      <AdSection format="horizontal" className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}/`}>
            <Card className="h-full hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader>
                <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <time className="text-xs text-muted-foreground">{post.date}</time>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <AdSection format="horizontal" className="mt-8" />
    </div>
  );
}
