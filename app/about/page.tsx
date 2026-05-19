import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Users, Globe, Heart } from "lucide-react";
import AdSection from "@/components/ad-section";

export const metadata: Metadata = {
  title: "About Us - QR Code Generator",
  description: "Learn about QRGen, the free online QR code generator. Our mission, features, and why millions trust us for their QR code needs.",
};

const stats = [
  { icon: QrCode, label: "QR Codes Generated", value: "10M+" },
  { icon: Users, label: "Active Users", value: "500K+" },
  { icon: Globe, label: "Countries", value: "150+" },
  { icon: Heart, label: "Satisfaction", value: "99%" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About QRGen</h1>
        <p className="text-muted-foreground text-lg">
          The most trusted free QR code generator on the web
        </p>
      </div>

      <AdSection format="horizontal" className="mb-8" />

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed mb-6">
          QRGen was founded with a simple mission: to make QR code generation accessible, 
          fast, and completely free for everyone. Whether you are a small business owner, 
          a marketer, or just someone who needs a quick QR code, we have got you covered.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our platform supports all major QR code types including URLs, WiFi networks, 
          WhatsApp messages, UPI payments, plain text, and email compose links. With 
          custom color options, logo embedding, and high-resolution PNG downloads, 
          you can create professional QR codes that match your brand identity.
        </p>
        <p className="text-lg leading-relaxed">
          We prioritize your privacy. All QR code generation happens in real-time 
          and we do not store any of your data on our servers. Your information 
          remains yours alone.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="p-6">
              <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AdSection format="horizontal" />
    </div>
  );
}
