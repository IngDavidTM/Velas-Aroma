import type { Product } from "@/data/products";

export type SortOption = "featured" | "price-asc" | "price-desc" | "new";

export type ProductFilters = {
  selectedCollections: string[];
  selectedAromas: string[];
  selectedColors: string[];
  selectedExtras: string[];
  personalizableOnly: boolean;
  selectedSize: string | null;
  searchTerm: string;
  sort: SortOption;
};

export const sizeBuckets = [
  { label: "Mini (2-4 cm)", min: 0, max: 4 },
  { label: "Pequeña (5-7 cm)", min: 4.1, max: 7 },
  { label: "Mediana (8-10 cm)", min: 7.1, max: 10 },
  { label: "Grande (11-25 cm)", min: 10.1, max: 25 },
];

function matchesSize(product: Product, selectedSize: string | null) {
  if (!selectedSize) return true;
  const bucket = sizeBuckets.find((size) => size.label === selectedSize);
  if (!bucket) return true;

  const withinHeight =
    product.medidas.altoCm >= bucket.min && product.medidas.altoCm <= bucket.max;
  const withinWidth =
    product.medidas.anchoCm >= bucket.min && product.medidas.anchoCm <= bucket.max;

  return withinHeight || withinWidth;
}

function matchesSearch(product: Product, term: string) {
  if (!term.trim()) return true;
  const lower = term.toLowerCase();
  return (
    product.nombre.toLowerCase().includes(lower) ||
    product.descripcionCorta.toLowerCase().includes(lower) ||
    product.descripcionLarga.toLowerCase().includes(lower) ||
    product.tags?.some((tag) => tag.toLowerCase().includes(lower))
  );
}

export function filterProducts(allProducts: Product[], filters: ProductFilters) {
  const {
    selectedCollections,
    selectedAromas,
    selectedColors,
    selectedExtras,
    personalizableOnly,
    selectedSize,
    searchTerm,
    sort,
  } = filters;

  return allProducts
    .filter((product) => {
      if (selectedCollections.length && !selectedCollections.includes(product.categoria)) {
        return false;
      }

      if (selectedAromas.length) {
        const hasAroma = product.aromasDisponibles.some((aroma) => selectedAromas.includes(aroma));
        if (!hasAroma) return false;
      }

      if (selectedColors.length) {
        const hasColor = product.coloresDisponibles.some((color) => selectedColors.includes(color));
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

      if (!matchesSize(product, selectedSize)) {
        return false;
      }

      if (!matchesSearch(product, searchTerm)) {
        return false;
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
}

