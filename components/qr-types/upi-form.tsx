"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UPIFormProps {
  data: { upiId: string; name: string; amount: string; note: string };
  onChange: (data: any) => void;
}

export default function UPIForm({ data, onChange }: UPIFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="upiId">UPI ID</Label>
        <Input
          id="upiId"
          placeholder="name@upi"
          value={data.upiId}
          onChange={(e) => onChange({ ...data, upiId: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Payee Name</Label>
        <Input
          id="name"
          placeholder="Recipient Name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (optional)</Label>
        <Input
          id="amount"
          type="number"
          placeholder="100"
          value={data.amount}
          onChange={(e) => onChange({ ...data, amount: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="note">Note (optional)</Label>
        <Input
          id="note"
          placeholder="Payment for..."
          value={data.note}
          onChange={(e) => onChange({ ...data, note: e.target.value })}
        />
      </div>
    </div>
  );
}
