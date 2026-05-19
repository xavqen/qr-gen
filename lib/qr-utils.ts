export type QRType = 
  | "url" 
  | "wifi" 
  | "whatsapp" 
  | "upi" 
  | "text" 
  | "email";

export interface QRData {
  type: QRType;
  content: string;
  fgColor: string;
  bgColor: string;
  size: number;
  logo?: string | null;
}

export function generateQRContent(type: QRType, values: Record<string, string>): string {
  switch (type) {
    case "url":
      return values.url || "";

    case "wifi":
      const security = values.security || "WPA";
      const hidden = values.hidden === "true" ? "true" : "false";
      return `WIFI:S:${values.ssid};T:${security};P:${values.password};H:${hidden};;`;

    case "whatsapp":
      const phone = values.phone?.replace(/\D/g, "");
      const message = encodeURIComponent(values.message || "");
      return `https://wa.me/${phone}?text=${message}`;

    case "upi":
      const upiId = encodeURIComponent(values.upiId || "");
      const name = encodeURIComponent(values.name || "");
      const amount = values.amount || "";
      const note = encodeURIComponent(values.note || "");
      let upiString = `upi://pay?pa=${upiId}&pn=${name}`;
      if (amount) upiString += `&am=${amount}`;
      if (note) upiString += `&tn=${note}`;
      return upiString;

    case "text":
      return values.text || "";

    case "email":
      const email = encodeURIComponent(values.email || "");
      const subject = encodeURIComponent(values.subject || "");
      const body = encodeURIComponent(values.body || "");
      return `mailto:${email}?subject=${subject}&body=${body}`;

    default:
      return "";
  }
}

export const qrTypeConfig: Record<QRType, { label: string; description: string; icon: string }> = {
  url: {
    label: "URL / Link",
    description: "Generate QR codes for websites, social profiles, or any link",
    icon: "Link",
  },
  wifi: {
    label: "WiFi",
    description: "Share WiFi credentials instantly with a scan",
    icon: "Wifi",
  },
  whatsapp: {
    label: "WhatsApp",
    description: "Create click-to-chat or message QR codes",
    icon: "MessageCircle",
  },
  upi: {
    label: "UPI Payment",
    description: "Accept payments via any UPI app in India",
    icon: "IndianRupee",
  },
  text: {
    label: "Plain Text",
    description: "Encode any text message in a QR code",
    icon: "Type",
  },
  email: {
    label: "Email",
    description: "Pre-fill email subject and body for quick sending",
    icon: "Mail",
  },
};
