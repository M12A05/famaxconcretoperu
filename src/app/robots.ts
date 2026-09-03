import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://www.famaxconcreto.com.pe";
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
