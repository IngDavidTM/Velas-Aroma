import FilterBar from "@/components/filter-bar";
import ProductGrid from "@/components/product-grid";
import SortMenu from "@/components/sort-menu";
import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import { products } from "@/data/products";

export default function StorePage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Tienda"
        title="Explora todas nuestras velas de soya artesanales."
        description="Filtra por colección, aroma o personalización y encuentra la pieza que conecta contigo."
        className="mb-10"
      />
      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <FilterBar />
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-brand-charcoal/80">
              {products.length} productos disponibles
            </p>
            <SortMenu />
          </div>
          <ProductGrid products={products} />
        </div>
      </div>

      <PageSection bordered={false} className="mt-16 border border-dashed border-brand-sand/70 bg-brand-sand/20 text-sm text-brand-charcoal/80">
        <p>
          Filtros interactivos y lógica de ordenamiento se conectarán con el CMS/tienda más adelante. Esta página muestra la estructura sugerida y componentes reutilizables.
        </p>
      </PageSection>
    </div>
  );
}
