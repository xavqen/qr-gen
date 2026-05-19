import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateStructuredData(type: string, data: Record<string, any>) {
  const base = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
  return JSON.stringify(base);
}
