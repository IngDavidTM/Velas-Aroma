import { notFound } from "next/navigation";
import ProductGrid from "@/components/product-grid";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory, type Product } from "@/data/products";

const contextualFilters: Record<string, string[]> = {
  flores: ["Peonía", "Girasol", "Rosa abierta", "Rosa cerrada", "Corona", "Oso de flores"],
  navidad: ["Árbol", "Campana", "Bola", "Corona"],
  jardin: ["Lavanda", "Hierbas", "Cítricos"],
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCategory(collection.slug as Product["categoria"]);
  const subFilters = contextualFilters[collection.slug] ?? [];

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Colección"
        title={collection.title}
        description={collection.description}
        className="mb-10"
      />

      {subFilters.length ? (
        <PageSection bordered={false} className="mb-10 border border-brand-sand/70 bg-brand-sand/30">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Subcategorías</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {subFilters.map((filter) => (
              <span
                key={filter}
                className="rounded-full border border-brand-brown/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-brand-brown/80"
              >
                {filter}
              </span>
            ))}
          </div>
        </PageSection>
      ) : null}

      <ProductGrid
        title={`Productos de ${collection.title}`}
        products={products}
        emptyMessage="Estamos preparando nuevos diseños para esta colección."
      />
    </div>
  );
}
