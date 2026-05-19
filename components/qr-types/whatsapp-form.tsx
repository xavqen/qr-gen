"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WhatsAppFormProps {
  data: { phone: string; message: string };
  onChange: (data: any) => void;
}

export default function WhatsAppForm({ data, onChange }: WhatsAppFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (with country code)</Label>
        <Input
          id="phone"
          placeholder="+1234567890"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Input
          id="message"
          placeholder="Hello, I want to connect..."
          value={data.message}
          onChange={(e) => onChange({ ...data, message: e.target.value })}
        />
      </div>
    </div>
  );
}
