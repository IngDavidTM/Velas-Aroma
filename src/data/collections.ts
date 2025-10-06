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
    heroImage: "/images/Candles/Navidad/tree1.avif",
    order: 1,
  },
  {
    slug: "flores",
    title: "Flores",
    description: "Bouquets aromáticos que duran para siempre.",
    heroImage: "/images/Candles/Flores/flor5.avif",
    order: 2,
  },
  {
    slug: "jardin",
    title: "Jardín",
    description: "Aromas frescos y herbales inspirados en la sierra ecuatoriana.",
    heroImage: "/images/Candles/Jardin/planta4.avif",
    order: 3,
  },
  {
    slug: "bebidas-postres",
    title: "Bebidas & Postres",
    description: "Texturas gourmand con notas de cacao, vainilla y frutos rojos.",
    heroImage: "/images/Candles/Postres/postre1.avif",
    order: 4,
  },
  {
    slug: "amor-amistad",
    title: "Amor & Amistad",
    description: "Regalos aromáticos para momentos románticos y especiales.",
    heroImage: "/images/Candles/SanValentin/amor4.avif",
    order: 5,
  },
  {
    slug: "mama",
    title: "Día de la Madre",
    description: "Colecciones suaves en tonos blush para agradecer y celebrar.",
    heroImage: "/images/Candles/Madre/mama2.avif",
    order: 6,
  },
  {
    slug: "disenos-unicos",
    title: "Diseños Únicos",
    description: "Ediciones limitadas con pigmentos y texturas irrepetibles.",
    heroImage: "/images/Candles/Unicos/unico5.avif",
    order: 7,
  },
  {
    slug: "velas-de-autor",
    title: "Velas de Autor",
    description: "Colecciones conceptuales firmadas por la fundadora.",
    heroImage: "/images/Candles/Autor/autor1.avif",
    order: 8,
  },
  {
    slug: "wax-melts",
    title: "Wax Melts",
    description: "Combos personalizables desde $1 con diseños temáticos.",
    heroImage: "/images/Candles/Wax/wax1.avif",
    order: 9,
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((collection) => collection.slug === slug);
