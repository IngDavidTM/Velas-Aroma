import productsJson from "./products.json";
import type { Aroma } from "@/data/site";

export type ProductExtra = {
  nombre: string;
  precio: number;
};

export type Product = {
  id: string;
  slug: string;
  nombre: string;
  categoria:
    | "navidad"
    | "jardin"
    | "flores"
    | "amor-amistad"
    | "mama"
    | "bebidas-postres"
    | "disenos-unicos"
    | "velas-de-autor"
    | "wax-melts";
  descripcionCorta: string;
  descripcionLarga: string;
  medidas: { altoCm: number; anchoCm: number };
  precioBase: number;
  extras?: ProductExtra[];
  personalizable: boolean;
  aromasDisponibles: Aroma[];
  coloresDisponibles: string[];
  imagenes: string[];
  tags?: string[];
  estado: "activo" | "agotado";
};

const productsData = productsJson as Product[];

/**
 * Array de productos centralizado. Edita `src/data/products.json`
 * para actualizar precios, descripciones, aromas o imágenes.
 */
export const products: Product[] = productsData;

export { productsJson };

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (categoria: Product["categoria"]) =>
  products.filter((product) => product.categoria === categoria);

export const featuredProducts = products.filter((product) =>
  product.tags?.includes("top ventas")
);
