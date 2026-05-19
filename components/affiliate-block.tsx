"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function AffiliateBlock() {
  return (
    <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg">Recommended Tools</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Best QR Code Scanners for Business
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Top Marketing Automation Tools
        </a>
      </CardContent>
    </Card>
  );
}
