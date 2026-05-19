"use client";

import { Label } from "@/components/ui/label";

interface TextFormProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextForm({ value, onChange }: TextFormProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="text">Text Content</Label>
      <textarea
        id="text"
        rows={4}
        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter your text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
