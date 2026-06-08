import { MetadataRoute } from "next";

const baseUrl = "https://www.qr-generator.website";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}