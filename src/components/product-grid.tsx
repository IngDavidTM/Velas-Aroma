"use client";

import { useEffect, useRef } from "react";
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
  animate?: boolean;
}

export default function ProductGrid({
  title,
  eyebrow,
  description,
  products,
  emptyMessage = "No hay productos disponibles por ahora.",
  animate = false,
}: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const grid = gridRef.current;
    if (!grid || !products.length) return;

    const cards = Array.from(grid.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, [products.length, animate]);

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
        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={animate ? "opacity-0 translate-y-8 transition-all duration-700" : ""}
            >
              <ProductCard product={product} />
            </div>
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
