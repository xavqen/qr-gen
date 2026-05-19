"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WiFiFormProps {
  data: { ssid: string; password: string; encryption: string; hidden: boolean };
  onChange: (data: any) => void;
}

export default function WiFiForm({ data, onChange }: WiFiFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="ssid">Network Name (SSID)</Label>
        <Input
          id="ssid"
          placeholder="WiFi Network Name"
          value={data.ssid}
          onChange={(e) => onChange({ ...data, ssid: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="WiFi Password"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Encryption</Label>
        <Select
          value={data.encryption}
          onValueChange={(value) => onChange({ ...data, encryption: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA">WPA/WPA2</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="nopass">None</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
