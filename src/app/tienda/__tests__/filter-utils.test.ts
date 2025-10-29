import { filterProducts, sizeBuckets, type ProductFilters } from "@/app/tienda/filter-utils";
import type { Product } from "@/data/products";
import { aromaOptions } from "@/data/site";

const productsFixture: Product[] = [
  {
    id: "p1",
    slug: "rosa-elegante",
    nombre: "Rosa Elegante",
    categorias: ["flores"],
    descripcionCorta: "Detalle floral",
    descripcionLarga: "Una vela elegante para regalo.",
    medidas: { altoCm: 6, anchoCm: 5 },
    precioBase: 12,
    extras: [{ nombre: "Base de madera", precio: 2 }],
    personalizable: true,
    aromasDisponibles: Array.from(aromaOptions),
    coloresDisponibles: ["Rojo", "Blanco"],
    imagenes: ["/images/products/placeholder.jpg"],
    tags: ["top ventas"],
    estado: "activo",
  },
  {
    id: "p2",
    slug: "pino-festivo",
    nombre: "Pino Festivo",
    categorias: ["navidad"],
    descripcionCorta: "Aroma de temporada",
    descripcionLarga: "Ideal para celebraciones navideñas.",
    medidas: { altoCm: 3, anchoCm: 3 },
    precioBase: 8,
    extras: [],
    personalizable: false,
    aromasDisponibles: Array.from(aromaOptions),
    coloresDisponibles: ["Verde", "Rojo"],
    imagenes: ["/images/products/placeholder.jpg"],
    estado: "activo",
  },
  {
    id: "p3",
    slug: "vela-minimal",
    nombre: "Vela Minimal",
    categorias: ["flores", "disenos-unicos"],
    descripcionCorta: "Diseño minimalista",
    descripcionLarga: "Perfecta para decorar espacios modernos.",
    medidas: { altoCm: 12, anchoCm: 12 },
    precioBase: 20,
    extras: [],
    personalizable: true,
    aromasDisponibles: Array.from(aromaOptions),
    coloresDisponibles: ["Negro", "Marrón"],
    imagenes: ["/images/products/placeholder.jpg"],
    estado: "activo",
  },
];

const baseFilters: ProductFilters = {
  selectedCollections: [],
  selectedAromas: [],
  selectedColors: [],
  selectedExtras: [],
  personalizableOnly: false,
  selectedSize: null,
  searchTerm: "",
  sort: "featured",
};

describe("filterProducts", () => {
  it("filters by collection and color", () => {
    const result = filterProducts(productsFixture, {
      ...baseFilters,
      selectedCollections: ["navidad"],
      selectedColors: ["Verde"],
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("p2");
  });

  it("respects personalizable flag and extras selection", () => {
    const result = filterProducts(productsFixture, {
      ...baseFilters,
      personalizableOnly: true,
      selectedExtras: ["Base de madera"],
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("p1");
  });

  it("filters by size bucket using height or width", () => {
    const miniLabel = sizeBuckets[0]!.label;
    const result = filterProducts(productsFixture, {
      ...baseFilters,
      selectedSize: miniLabel,
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("p2");
  });

  it("applies search across descriptions and tags", () => {
    const result = filterProducts(productsFixture, {
      ...baseFilters,
      searchTerm: "modernos",
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("p3");
  });

  it("sorts by price descending", () => {
    const result = filterProducts(productsFixture, {
      ...baseFilters,
      sort: "price-desc",
    });

    expect(result[0]?.precioBase).toBe(20);
    expect(result[result.length - 1]?.precioBase).toBe(8);
  });
});
