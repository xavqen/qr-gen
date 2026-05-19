"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, RefreshCw, Upload, Link, Wifi, MessageCircle, CreditCard, Type, Mail } from "lucide-react";
import URLForm from "./qr-types/url-form";
import WiFiForm from "./qr-types/wifi-form";
import WhatsAppForm from "./qr-types/whatsapp-form";
import UPIForm from "./qr-types/upi-form";
import TextForm from "./qr-types/text-form";
import EmailForm from "./qr-types/email-form";
import type { QRType } from "@/types/qr";

const qrTypes = [
  { id: "url" as QRType, label: "URL", icon: <Link className="h-4 w-4" /> },
  { id: "wifi" as QRType, label: "WiFi", icon: <Wifi className="h-4 w-4" /> },
  { id: "whatsapp" as QRType, label: "WhatsApp", icon: <MessageCircle className="h-4 w-4" /> },
  { id: "upi" as QRType, label: "UPI", icon: <CreditCard className="h-4 w-4" /> },
  { id: "text" as QRType, label: "Text", icon: <Type className="h-4 w-4" /> },
  { id: "email" as QRType, label: "Email", icon: <Mail className="h-4 w-4" /> },
];

export default function QRGenerator() {
  const [activeType, setActiveType] = useState<QRType>("url");
  const [qrData, setQrData] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState("300");
  const [level, setLevel] = useState("M");
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [wifiData, setWifiData] = useState({ ssid: "", password: "", encryption: "WPA", hidden: false });
  const [whatsappData, setWhatsappData] = useState({ phone: "", message: "" });
  const [upiData, setUpiData] = useState({ upiId: "", name: "", amount: "", note: "" });
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" });

  const getQRContent = useCallback(() => {
    switch (activeType) {
      case "url":
        return qrData;
      case "wifi":
        return `WIFI:S:${wifiData.ssid};T:${wifiData.encryption};P:${wifiData.password};H:${wifiData.hidden};;`;
      case "whatsapp":
        return `https://wa.me/${whatsappData.phone.replace(/\D/g, "")}${whatsappData.message ? `?text=${encodeURIComponent(whatsappData.message)}` : ""}`;
      case "upi":
        return `upi://pay?pa=${upiData.upiId}&pn=${encodeURIComponent(upiData.name)}${upiData.amount ? `&am=${upiData.amount}` : ""}${upiData.note ? `&tn=${encodeURIComponent(upiData.note)}` : ""}`;
      case "text":
        return qrData;
      case "email":
        return `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      default:
        return "";
    }
  }, [activeType, qrData, wifiData, whatsappData, upiData, emailData]);

  const generateQR = async () => {
    const content = getQRContent();
    if (!content) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/qr/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          fgColor,
          bgColor,
          size: parseInt(size),
          level,
          logo,
        }),
      });

      const data = await response.json();
      if (data.qrCode) {
        setQrImage(data.qrCode);
      }
    } catch (error) {
      console.error("Error generating QR:", error);
    }
    setIsLoading(false);
  };

  const downloadQR = () => {
    if (!qrImage) return;
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = `qr-code-${activeType}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 shadow-xl">
          <CardContent className="p-6">
            <Tabs value={activeType} onValueChange={(v) => setActiveType(v as QRType)}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
                {qrTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id} className="flex flex-col items-center gap-1 py-2">
                    {type.icon}
                    <span className="text-xs">{type.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="url">
                <URLForm value={qrData} onChange={setQrData} />
              </TabsContent>
              <TabsContent value="wifi">
                <WiFiForm data={wifiData} onChange={setWifiData} />
              </TabsContent>
              <TabsContent value="whatsapp">
                <WhatsAppForm data={whatsappData} onChange={setWhatsappData} />
              </TabsContent>
              <TabsContent value="upi">
                <UPIForm data={upiData} onChange={setUpiData} />
              </TabsContent>
              <TabsContent value="text">
                <TextForm value={qrData} onChange={setQrData} />
              </TabsContent>
              <TabsContent value="email">
                <EmailForm data={emailData} onChange={setEmailData} />
              </TabsContent>
            </Tabs>

            {/* Customization */}
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Foreground Color</Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="h-10 w-10 rounded cursor-pointer"
                    />
                    <Input value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-10 w-10 rounded cursor-pointer"
                    />
                    <Input value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Size (px)</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200">200px</SelectItem>
                      <SelectItem value="300">300px</SelectItem>
                      <SelectItem value="400">400px</SelectItem>
                      <SelectItem value="500">500px</SelectItem>
                      <SelectItem value="1000">1000px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Error Correction</Label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (~7%)</SelectItem>
                      <SelectItem value="M">Medium (~15%)</SelectItem>
                      <SelectItem value="Q">Quartile (~25%)</SelectItem>
                      <SelectItem value="H">High (~30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Logo (optional)</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleLogoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {logo ? "Change Logo" : "Upload Logo"}
                  </Button>
                  {logo && (
                    <Button variant="ghost" size="sm" onClick={() => setLogo(null)}>
                      Remove
                    </Button>
                  )}
                </div>
                {logo && (
                  <img src={logo} alt="Logo preview" className="h-12 w-12 object-contain rounded" />
                )}
              </div>
            </div>

            <Button
              onClick={generateQR}
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Generate QR Code
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 shadow-xl h-full">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[500px]">
            {qrImage ? (
              <div className="space-y-6 w-full">
                <div className="relative mx-auto w-fit">
                  <img
                    src={qrImage}
                    alt="Generated QR Code"
                    className="rounded-lg shadow-lg max-w-full"
                  />
                </div>
                <div className="flex gap-3 justify-center">
                  <Button onClick={downloadQR} className="bg-gradient-to-r from-green-500 to-emerald-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download PNG
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto rounded-lg bg-muted flex items-center justify-center">
                  <RefreshCw className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground">
                  Fill in the details and click Generate to create your QR code
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
