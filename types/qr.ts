export type QRType = 'url' | 'wifi' | 'whatsapp' | 'upi' | 'text' | 'email';

export interface QRConfig {
  type: QRType;
  data: string;
  fgColor: string;
  bgColor: string;
  size: number;
  level: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  logo?: string;
}

export interface WiFiData {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface WhatsAppData {
  phone: string;
  message: string;
}

export interface UPIData {
  upiId: string;
  name: string;
  amount?: string;
  note?: string;
}

export interface EmailData {
  to: string;
  subject: string;
  body: string;
}
