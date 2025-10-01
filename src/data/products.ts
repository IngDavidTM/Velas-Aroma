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

export const products: Product[] = [
  {
    id: "vela-arbol-navidad",
    slug: "arbol-navideno",
    nombre: "Árbol Navideño",
    categoria: "navidad",
    descripcionCorta: "Aroma de manzana y canela con notas de pino.",
    descripcionLarga:
      "Velas moldeadas en forma de pino con detalles dorados, ideales para decorar mesas festivas.",
    medidas: { altoCm: 10, anchoCm: 5 },
    precioBase: 3,
    extras: [{ nombre: "Base de madera", precio: 1 }],
    personalizable: true,
    aromasDisponibles: ["Manzana y canela", "Frutos rojos", "Vainilla macadamia"],
    coloresDisponibles: ["Verde", "Blanco", "Champagne"],
    imagenes: ["/images/products/arbol-navidad.jpg"],
    tags: ["edición navidad"],
    estado: "activo",
  },
  {
    id: "vela-copa-champagne",
    slug: "copa-champagne",
    nombre: "Copa Champagne",
    categoria: "bebidas-postres",
    descripcionCorta: "Notas burbujeantes de champagne y frutos rojos.",
    descripcionLarga:
      "Cera de soya vertida en copas reutilizables con detalles perlados. Personaliza color y aroma.",
    medidas: { altoCm: 8, anchoCm: 4 },
    precioBase: 6.5,
    personalizable: true,
    aromasDisponibles: ["Champagne", "Belle Glamour", "Frutos rojos"],
    coloresDisponibles: ["Champagne", "Rose", "Ámbar"],
    imagenes: ["/images/products/copa-champagne.jpg"],
    tags: ["personalizable"],
    estado: "activo",
  },
  {
    id: "vela-peonia",
    slug: "peonia",
    nombre: "Peonía",
    categoria: "flores",
    descripcionCorta: "Flor esculpida a mano con aroma de jazmín y manzanilla.",
    descripcionLarga:
      "Disponibles en tres tamaños para centros de mesa. Combina colores pastel y fragancias florales.",
    medidas: { altoCm: 8, anchoCm: 4 },
    precioBase: 4,
    extras: [{ nombre: "Base de madera", precio: 1 }],
    personalizable: true,
    aromasDisponibles: ["Jazmín", "Manzanilla", "Violeta"],
    coloresDisponibles: ["Marfil", "Rosa", "Lavanda"],
    imagenes: ["/images/products/peonia.jpg"],
    tags: ["flores", "combo"],
    estado: "activo",
  },
  {
    id: "vela-maracuya",
    slug: "maracuya-citrica",
    nombre: "Maracuyá Cítrica",
    categoria: "jardin",
    descripcionCorta: "Fragancia tropical que ilumina estudios y salas.",
    descripcionLarga:
      "Vela en vaso minimalista con tapa de madera. Duración aproximada de 40 horas.",
    medidas: { altoCm: 9, anchoCm: 7 },
    precioBase: 8.5,
    personalizable: false,
    aromasDisponibles: ["Maracuyá", "Hierba luisa", "Menta"],
    coloresDisponibles: ["Arena", "Sage"],
    imagenes: ["/images/products/maracuya.jpg"],
    tags: ["top ventas"],
    estado: "activo",
  },
  {
    id: "vela-waxmelts",
    slug: "wax-melts-coleccion",
    nombre: "Wax Melts Colección",
    categoria: "wax-melts",
    descripcionCorta: "Combos personalizables desde $1 por pieza.",
    descripcionLarga:
      "Elige diseños temáticos y fragancias para aromatizar con quemadores. Ideal para recuerdos corporativos.",
    medidas: { altoCm: 2, anchoCm: 3 },
    precioBase: 1,
    personalizable: true,
    aromasDisponibles: [
      "Chocolate",
      "Hierba luisa",
      "Argán",
      "Eucalipto",
      "Belle Glamour",
    ],
    coloresDisponibles: ["Blanco", "Terracota", "Petal", "Verde salvia"],
    imagenes: ["/images/products/waxmelts.jpg"],
    tags: ["personalizable", "mayoristas"],
    estado: "activo",
  },
  {
    id: "vela-kit-regalo",
    slug: "kit-regalo",
    nombre: "Kit Regalo Aroma",
    categoria: "disenos-unicos",
    descripcionCorta:
      "Set de tres velas medianas + tarjeta personalizada y flor seca, ideal para obsequios.",
    descripcionLarga:
      "Incluye combinación de fragancias según la estación y empaques en papel reciclado.",
    medidas: { altoCm: 6, anchoCm: 5 },
    precioBase: 15,
    personalizable: true,
    aromasDisponibles: ["Frutos rojos", "Vainilla macadamia", "Belle Glamour"],
    coloresDisponibles: ["Caramelo", "Rosa viejo", "Gris perla"],
    imagenes: ["/images/products/kit-regalo.jpg"],
    tags: ["combo", "top ventas"],
    estado: "activo",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (categoria: Product["categoria"]) =>
  products.filter((product) => product.categoria === categoria);

export const featuredProducts = products.filter((product) =>
  product.tags?.includes("top ventas")
);
