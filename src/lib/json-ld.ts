import type { Product } from "@/data/products";

export function generateProductJsonLd(product: Product) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.nombre,
        description: product.descripcionLarga || product.descripcionCorta,
        image: product.imagenes,
        sku: product.id,
        brand: {
            "@type": "Brand",
            name: "Velas & Aroma",
        },
        offers: {
            "@type": "Offer",
            url: `https://velasyaroma.com/producto/${product.slug}`,
            priceCurrency: "USD",
            price: product.precioBase.toFixed(2),
            availability:
                product.estado === "activo"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/NewCondition",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "1",
        },
    };
}

export function generateLocalBusinessJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Velas & Aroma",
        description:
            "Velas artesanales hechas en Quito con cera de soya, fragancias botánicas y rituales de bienestar.",
        image: "https://velasyaroma.com/logo.png",
        url: "https://velasyaroma.com",
        telephone: "+593-99-999-9999",
        email: "hola@velasyaroma.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Tumbaco",
            addressLocality: "Quito",
            addressRegion: "Pichincha",
            addressCountry: "EC",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "-0.2186",
            longitude: "-78.3990",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "14:00",
            },
        ],
        sameAs: [
            "https://www.instagram.com/velasyaroma",
            "https://www.facebook.com/velasyaroma",
        ],
    };
}
