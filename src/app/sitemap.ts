import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { collections } from "@/data/collections";

const baseUrl = "https://velasyaroma.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/tienda`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/servicios`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/nosotros`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/envios`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/pagos`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];

    // Product pages
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/producto/${product.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Category pages
    const categoryPages: MetadataRoute.Sitemap = collections.map((collection) => ({
        url: `${baseUrl}/categoria/${collection.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...productPages, ...categoryPages];
}
