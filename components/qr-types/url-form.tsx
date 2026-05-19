"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface URLFormProps {
  value: string;
  onChange: (value: string) => void;
}

export default function URLForm({ value, onChange }: URLFormProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="url">Website URL</Label>
      <Input
        id="url"
        type="url"
        placeholder="https://example.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
