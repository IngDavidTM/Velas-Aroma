import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/carrito", "/checkout"],
        },
        sitemap: "https://velasyaroma.com/sitemap.xml",
    };
}
