import { notFound } from "next/navigation";
import ProductGrid from "@/components/product-grid";
import {
  getProductBySlug,
  getProductsByCategories,
} from "@/data/products";
import ProductDetail from "@/app/producto/product-detail";

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

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <ProductDetail product={product} />

      <ProductGrid
        title="También te puede gustar"
        products={related.slice(0, 3)}
        emptyMessage="Pronto añadiremos más diseños relacionados."
      />
    </div>
  );
}
