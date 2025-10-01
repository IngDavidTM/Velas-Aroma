export type Collection = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  order: number;
};

export const collections: Collection[] = [
  {
    slug: "navidad",
    title: "Navidad",
    description: "Velas que perfuman celebraciones con especias y notas invernales.",
    heroImage: "/images/collections/navidad.jpg",
    order: 1,
  },
  {
    slug: "flores",
    title: "Flores",
    description: "Bouquets aromáticos que duran para siempre.",
    heroImage: "/images/collections/flores.jpg",
    order: 2,
  },
  {
    slug: "jardin",
    title: "Jardín",
    description: "Aromas frescos y herbales inspirados en la sierra ecuatoriana.",
    heroImage: "/images/collections/jardin.jpg",
    order: 3,
  },
  {
    slug: "bebidas-postres",
    title: "Bebidas & Postres",
    description: "Texturas gourmand con notas de cacao, vainilla y frutos rojos.",
    heroImage: "/images/collections/bebidas.jpg",
    order: 4,
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((collection) => collection.slug === slug);
