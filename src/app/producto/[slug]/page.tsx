import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductGrid from "@/components/product-grid";
import {
  getProductBySlug,
  getProductsByCategories,
  products,
} from "@/data/products";
import ProductDetail from "@/app/producto/product-detail";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Velas & Aroma",
    };
  }

  const price = product.precioBase.toFixed(2);
  const imageUrl = product.imagenes[0] ?? "/logo.png";

  return {
    title: `${product.nombre} | Velas & Aroma`,
    description: product.descripcionLarga || product.descripcionCorta,
    openGraph: {
      title: product.nombre,
      description: product.descripcionCorta,
      images: [imageUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.nombre,
      description: product.descripcionCorta,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/producto/${slug}`,
    },
    other: {
      price,
      availability: product.estado === "activo" ? "in stock" : "out of stock",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategories(product.categorias).filter(
    (item) => item.slug !== product.slug,
  );

  const jsonLd = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 py-14 sm:px-6 md:px-10">
        <ProductDetail product={product} />

        <ProductGrid
          title="También te puede gustar"
          products={related.slice(0, 3)}
          emptyMessage="Pronto añadiremos más diseños relacionados."
        />
      </div>
    </>
  );
}
