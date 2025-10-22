"use client";

import { useMemo, useState } from "react";
import FilterSidebar from "@/app/tienda/store-filter";
import ProductGrid from "@/components/product-grid";
import SectionIntro from "@/components/section-intro";
import { products } from "@/data/products";
import { aromaOptions } from "@/data/site";
import { collections } from "@/data/collections";

type SortOption = "featured" | "price-asc" | "price-desc" | "new";

const colorOptions = [
  { label: "Negro", hex: "#1f1a18", textColor: "#f5ede4" },
  { label: "Blanco", hex: "#ffffff" },
  { label: "Rojo", hex: "#ef4444" },
  { label: "Azul", hex: "#3b82f6" },
  { label: "Amarillo", hex: "#facc15" },
  { label: "Rosado", hex: "#f472b6" },
  { label: "Morado", hex: "#a855f7" },
  { label: "Verde", hex: "#22c55e" },
  { label: "Naranja", hex: "#fb923c" },
  { label: "Marrón", hex: "#8c5a3c", textColor: "#f5ede4" },
];

const sizeBuckets = [
  { label: "Mini (2-4 cm)", min: 0, max: 4 },
  { label: "Pequeña (5-7 cm)", min: 4.1, max: 7 },
  { label: "Mediana (8-10 cm)", min: 7.1, max: 10 },
  { label: "Grande (11-25 cm)", min: 10.1, max: 25 },
];

const extraOptions = [
  { label: "Base de madera", key: "Base de madera" },
  { label: "Caja de regalo", key: "Caja de regalo" },
  { label: "Moño de lino", key: "Moño de lino" },
  { label: "Tarjeta personalizada", key: "Tarjeta personalizada" },
  { label: "Tarjeta manuscrita", key: "Tarjeta manuscrita" },
  { label: "Caja rígida reutilizable", key: "Caja rígida reutilizable" },
  { label: "Certificado de edición", key: "Certificado de edición" },
];

function bucketLabel(size: (typeof sizeBuckets)[number]) {
  return size.label;
}

export default function StorePage() {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedAromas, setSelectedAromas] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [personalizableOnly, setPersonalizableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCollections.length && !selectedCollections.includes(product.categoria)) {
          return false;
        }

        if (selectedAromas.length) {
          const hasAroma = product.aromasDisponibles.some((aroma) =>
            selectedAromas.includes(aroma),
          );
          if (!hasAroma) return false;
        }

        if (selectedColors.length) {
          const hasColor = product.coloresDisponibles.some((color) =>
            selectedColors.includes(color),
          );
          if (!hasColor) return false;
        }

        if (selectedExtras.length) {
          const extrasLabels = product.extras?.map((extra) => extra.nombre) ?? [];
          const matchesExtra = selectedExtras.every((extra) => extrasLabels.includes(extra));
          if (!matchesExtra) return false;
        }

        if (personalizableOnly && !product.personalizable) {
          return false;
        }

        if (selectedSize) {
          const bucket = sizeBuckets.find((size) => size.label === selectedSize);
          if (bucket) {
            const withinHeight =
              product.medidas.altoCm >= bucket.min && product.medidas.altoCm <= bucket.max;
            const withinWidth =
              product.medidas.anchoCm >= bucket.min && product.medidas.anchoCm <= bucket.max;
            if (!withinHeight && !withinWidth) {
              return false;
            }
          }
        }

        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matches =
            product.nombre.toLowerCase().includes(term) ||
            product.descripcionCorta.toLowerCase().includes(term) ||
            product.descripcionLarga.toLowerCase().includes(term) ||
            product.tags?.some((tag) => tag.toLowerCase().includes(term));
          if (!matches) return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc":
            return a.precioBase - b.precioBase;
          case "price-desc":
            return b.precioBase - a.precioBase;
          case "new":
            return a.nombre.localeCompare(b.nombre);
          case "featured":
          default:
            return (b.tags?.includes("top ventas") ? 1 : 0) - (a.tags?.includes("top ventas") ? 1 : 0);
        }
      });
  }, [
    selectedCollections,
    selectedAromas,
    selectedColors,
    selectedExtras,
    personalizableOnly,
    selectedSize,
    searchTerm,
    sort,
  ]);

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Tienda"
        title="Explora todas nuestras velas de soya artesanales."
        description="Filtra por colección, aroma o personalización y encuentra la pieza que conecta contigo."
        className="mb-10"
      />
      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <FilterSidebar
          collections={collections}
          aromaOptions={aromaOptions}
          colorOptions={colorOptions}
          sizeOptions={sizeBuckets.map(bucketLabel)}
          extraOptions={extraOptions}
          selectedCollections={selectedCollections}
          onToggleCollection={(slug) =>
            setSelectedCollections((prev) =>
              prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug],
            )
          }
          selectedAromas={selectedAromas}
          onToggleAroma={(aroma) =>
            setSelectedAromas((prev) =>
              prev.includes(aroma) ? prev.filter((item) => item !== aroma) : [...prev, aroma],
            )
          }
          selectedColors={selectedColors}
          onToggleColor={(color) =>
            setSelectedColors((prev) =>
              prev.includes(color) ? prev.filter((item) => item !== color) : [...prev, color],
            )
          }
          personalizableOnly={personalizableOnly}
          onTogglePersonalizable={() => setPersonalizableOnly((prev) => !prev)}
          selectedSize={selectedSize}
          onSelectSize={(size) => setSelectedSize((prev) => (prev === size ? null : size))}
          selectedExtras={selectedExtras}
          onToggleExtra={(extraLabel) =>
            setSelectedExtras((prev) =>
              prev.includes(extraLabel)
                ? prev.filter((item) => item !== extraLabel)
                : [...prev, extraLabel],
            )
          }
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClearFilters={() => {
            setSelectedCollections([]);
            setSelectedAromas([]);
            setSelectedColors([]);
            setSelectedExtras([]);
            setSelectedSize(null);
            setPersonalizableOnly(false);
            setSearchTerm("");
          }}
        />
        <div className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-brand-charcoal/80">
              {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"} disponibles
            </p>
            <label className="flex items-center gap-3 text-sm text-brand-charcoal/80">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-brown/70">Ordenar</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortOption)}
                className="border border-brand-sand/70 bg-transparent px-3 py-2 text-sm text-brand-charcoal focus:border-brand-brown focus:outline-none"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="new">Más nuevos</option>
              </select>
            </label>
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
