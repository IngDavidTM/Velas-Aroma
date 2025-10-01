import ProductCard from "@/components/product-card";
import type { Product } from "@/data/products";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";

interface ProductGridProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  title,
  eyebrow,
  description,
  products,
  emptyMessage = "No hay productos disponibles por ahora.",
}: ProductGridProps) {
  return (
    <PageSection className="md:px-10">
      {(title || eyebrow) && (
        <SectionIntro
          eyebrow={eyebrow}
          title={title ?? "Productos"}
          description={description}
          className="mb-8"
        />
      )}
      {products.length ? (
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded border border-dashed border-brand-sand/70 px-6 py-12 text-center text-sm text-brand-brown/70">
          {emptyMessage}
        </p>
      )}
    </PageSection>
  );
}
