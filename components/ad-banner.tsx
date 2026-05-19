"use client";

import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
  slot?: string;
  format?: "horizontal" | "vertical" | "square";
}

export function AdBanner({ className, slot = "default", format = "horizontal" }: AdBannerProps) {
  const sizeClasses = {
    horizontal: "h-[90px] w-full max-w-[728px]",
    vertical: "h-[600px] w-[160px]",
    square: "h-[250px] w-[300px]",
  };

  return (
    <div className={cn("mx-auto my-6", className)}>
      <div className="text-xs text-center text-muted-foreground mb-2 uppercase tracking-wider">Advertisement</div>
      <div
        className={cn(
          "bg-muted/50 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center",
          sizeClasses[format]
        )}
      >
        {/* Replace with your AdSense code */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <span className="text-muted-foreground text-sm">Ad Space - {format}</span>
      </div>
    </div>
  );
}
