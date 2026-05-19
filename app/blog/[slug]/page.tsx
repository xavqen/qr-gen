import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AdBanner } from "@/components/ad-banner";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: { slug: string };
}

const postsData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "how-to-create-qr-codes-for-business": {
    title: "How to Create QR Codes for Your Business in 2024",
    date: "2024-05-15",
    readTime: "5 min read",
    category: "Business",
    content: `
<h2>Why QR Codes Matter for Business</h2>
<p>QR codes have become an essential tool for modern businesses. They bridge the gap between physical and digital marketing, allowing customers to access information instantly with a simple scan.</p>

<h2>Getting Started</h2>
<p>The first step is choosing the right type of QR code for your needs. URL QR codes are perfect for driving traffic to your website, while WiFi QR codes make it easy for customers to connect to your network.</p>

<h2>Best Practices</h2>
<ul>
<li>Always test your QR code before printing</li>
<li>Use high contrast colors for better scanability</li>
<li>Include a call-to-action near your QR code</li>
<li>Track performance using UTM parameters in URLs</li>
<li>Consider adding your logo for brand recognition</li>
</ul>

<h2>Advanced Tips</h2>
<p>For marketing campaigns, consider using dynamic QR codes that can be updated without reprinting. This saves costs and allows for A/B testing different landing pages.</p>

<h2>Conclusion</h2>
<p>QR codes are a powerful, cost-effective way to enhance customer engagement. With QR Generator Pro, you can create professional QR codes in seconds.</p>
    `,
  },
  "wifi-qr-code-guide": {
    title: "The Complete Guide to WiFi QR Codes",
    date: "2024-05-10",
    readTime: "4 min read",
    category: "Tutorial",
    content: `
<h2>What is a WiFi QR Code?</h2>
<p>A WiFi QR code contains your network credentials in a standardized format. When scanned, it automatically connects the device to your network without requiring manual password entry.</p>

<h2>How to Create One</h2>
<p>Using QR Generator Pro, simply enter your SSID, password, and security type. The generator creates a QR code following the WIFI:T:protocol;S:ssid;P:password;; format.</p>

<h2>Use Cases</h2>
<ul>
<li>Coffee shops and restaurants</li>
<li>Hotels and Airbnbs</li>
<li>Office spaces</li>
<li>Event venues</li>
<li>Home guests</li>
</ul>

<h2>Security Considerations</h2>
<p>While WiFi QR codes are convenient, consider creating a guest network rather than sharing your main network credentials. This keeps your primary network secure while still offering easy access.</p>
    `,
  },
  "upi-qr-code-payments": {
    title: "UPI QR Codes: Accept Payments Anywhere in India",
    date: "2024-05-05",
    readTime: "6 min read",
    category: "Payments",
    content: `
<h2>Understanding UPI QR Codes</h2>
<p>UPI (Unified Payments Interface) QR codes enable instant money transfers using any UPI-enabled app like Google Pay, PhonePe, Paytm, or BHIM.</p>

<h2>Creating Your UPI QR Code</h2>
<p>Enter your UPI ID (e.g., name@oksbi), payee name, and optionally set a fixed amount. The QR code follows the official UPI URI scheme: upi://pay?pa=upiid&pn=name&am=amount</p>

<h2>Benefits for Businesses</h2>
<ul>
<li>Zero transaction fees for most UPI apps</li>
<li>Instant payment confirmation</li>
<li>No POS hardware required</li>
<li>Works with all major Indian banks</li>
<li>Secure and regulated by RBI</li>
</ul>

<h2>Printing Tips</h2>
<p>For shop displays, print your UPI QR code at least 3x3 inches for easy scanning. Laminate it for durability. Place it at checkout counters and on invoices.</p>
    `,
  },
  "custom-qr-code-design": {
    title: "Design Tips for Custom QR Codes with Logos",
    date: "2024-04-28",
    readTime: "7 min read",
    category: "Design",
    content: `
<h2>Why Customize QR Codes?</h2>
<p>Standard black-and-white QR codes work fine, but customized codes with brand colors and logos create better engagement and brand recognition.</p>

<h2>Color Guidelines</h2>
<p>The most important rule is contrast. Your foreground color (the QR pattern) must be significantly darker than your background. Avoid pastel combinations and ensure a contrast ratio of at least 4.5:1.</p>

<h2>Logo Placement</h2>
<p>Place your logo in the center of the QR code. The error correction level (we use High) allows up to 30% of the code to be obscured while remaining scannable.</p>

<h2>Testing Your Design</h2>
<p>Always test your customized QR code with multiple devices and apps before finalizing. Some scanners are more sensitive to design changes than others.</p>
    `,
  },
  "whatsapp-qr-code-marketing": {
    title: "WhatsApp QR Codes for Customer Support",
    date: "2024-04-20",
    readTime: "5 min read",
    category: "Marketing",
    content: `
<h2>WhatsApp Business QR Codes</h2>
<p>WhatsApp QR codes let customers start a conversation with your business instantly. You can pre-fill messages to streamline common inquiries.</p>

<h2>Setting Up</h2>
<p>Enter your business phone number with country code and optionally add a pre-filled message like Hello, I am interested in your services.</p>

<h2>Marketing Applications</h2>
<ul>
<li>Product packaging for support</li>
<li>Business cards for quick contact</li>
<li>Website contact pages</li>
<li>Social media profiles</li>
<li>Event registrations</li>
</ul>

<h2>Best Practices</h2>
<p>Respond promptly to messages received via QR codes. Set up quick replies in WhatsApp Business for common questions to improve response time.</p>
    `,
  },
  "qr-code-security-best-practices": {
    title: "QR Code Security: Best Practices for 2024",
    date: "2024-04-15",
    readTime: "8 min read",
    category: "Security",
    content: `
<h2>QR Code Security Risks</h2>
<p>While QR codes are convenient, they can be exploited for phishing, malware distribution, and data theft. Understanding these risks helps you use QR codes safely.</p>

<h2>Common Threats</h2>
<ul>
<li>Quishing (QR phishing) attacks</li>
<li>Malicious URL redirection</li>
<li>Fake payment QR codes</li>
<li>Data harvesting through QR scans</li>
</ul>

<h2>Protection Strategies</h2>
<p>Always verify the destination URL before scanning. Use QR scanner apps that show the URL preview. For payments, confirm the recipient details in your UPI app before entering your PIN.</p>

<h2>For Businesses</h2>
<p>When generating QR codes for customers, use HTTPS URLs. Consider adding your brand name in the URL path for recognition. Regularly audit where your QR codes are displayed to prevent tampering.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = postsData[params.slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || post.title,
    alternates: {
      canonical: `/blog/${params.slug}/`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = postsData[params.slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog/" className="text-primary hover:underline">
          <ArrowLeft className="inline mr-1 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          </div>

          <AdBanner format="horizontal" />

          <Card className="glass-card mb-8">
            <CardContent className="p-6 md:p-8">
              <div
                className="prose prose-slate dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/blog/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                More Articles
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </article>

        <AdBanner format="square" />
      </div>
    </div>
  );
}
