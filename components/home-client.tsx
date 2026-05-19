// components/home-client.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode, Link as LinkIcon, Wifi, MessageCircle, CreditCard, Type, Mail, ArrowRight, Zap, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AdSection from "@/components/ad-section";
import AffiliateBlock from "@/components/affiliate-block";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Generation",
    description: "Create QR codes in seconds with our lightning-fast generator.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Custom Styling",
    description: "Choose custom colors and add your logo to match your brand.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy First",
    description: "Your data is processed securely. No data is stored on our servers.",
  },
];

const qrTypes = [
  { icon: <LinkIcon className="h-6 w-6" />, label: "URL", desc: "Website links", color: "from-blue-500 to-cyan-500" },
  { icon: <Wifi className="h-6 w-6" />, label: "WiFi", desc: "Network access", color: "from-green-500 to-emerald-500" },
  { icon: <MessageCircle className="h-6 w-6" />, label: "WhatsApp", desc: "Chat links", color: "from-green-600 to-teal-500" },
  { icon: <CreditCard className="h-6 w-6" />, label: "UPI", desc: "Payments", color: "from-purple-500 to-indigo-500" },
  { icon: <Type className="h-6 w-6" />, label: "Text", desc: "Plain text", color: "from-orange-500 to-red-500" },
  { icon: <Mail className="h-6 w-6" />, label: "Email", desc: "Mailto links", color: "from-pink-500 to-rose-500" }
];

export default function HomeClient() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Free QR Code Generator
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Create professional QR codes for any purpose. Custom colors, logos,
                and instant PNG downloads. No signup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/generate/">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                    Generate QR Code
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* QR Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          >
            {qrTypes.map((type) => (
              <Link key={type.label} href="/generate/">
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br bg-opacity-10 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${type.color} text-white mb-3`}>
                      {type.icon}
                    </div>
                    <h3 className="font-semibold">{type.label}</h3>
                    <p className="text-xs text-muted-foreground">{type.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ad Section */}
      <AdSection format="horizontal" />

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our QR Generator?</h2>
            <p className="text-muted-foreground">Professional features, completely free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-background/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Block */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <AffiliateBlock />
          </div>
        </div>
      </section>

      {/* Second Ad */}
      <AdSection format="horizontal" />
    </div>
  );
}