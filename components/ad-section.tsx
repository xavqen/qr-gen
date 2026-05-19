"use client";

interface AdSectionProps {
  className?: string;
  slot?: string;
  format?: "horizontal" | "vertical" | "square";
}

export default function AdSection({ 
  className = "", 
  slot = "default",
  format = "horizontal" 
}: AdSectionProps) {
  const dimensions = {
    horizontal: "h-[90px] w-full max-w-[728px]",
    vertical: "h-[600px] w-[300px]",
    square: "h-[250px] w-[300px]",
  };

  return (
    <div className={`mx-auto my-6 ${className}`}>
      <div className={`${dimensions[format]} mx-auto bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center`}>
        <span className="text-sm text-muted-foreground">
          Ad Space ({format}) - AdSense Ready
        </span>
      </div>
    </div>
  );
}
