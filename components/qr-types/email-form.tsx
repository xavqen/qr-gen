"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailFormProps {
  data: { to: string; subject: string; body: string };
  onChange: (data: any) => void;
}

export default function EmailForm({ data, onChange }: EmailFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="to">To Email</Label>
        <Input
          id="to"
          type="email"
          placeholder="recipient@example.com"
          value={data.to}
          onChange={(e) => onChange({ ...data, to: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="Email Subject"
          value={data.subject}
          onChange={(e) => onChange({ ...data, subject: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="body">Body</Label>
        <textarea
          id="body"
          rows={3}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Email body..."
          value={data.body}
          onChange={(e) => onChange({ ...data, body: e.target.value })}
        />
      </div>
    </div>
  );
}
