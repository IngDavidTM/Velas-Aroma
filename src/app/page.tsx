import HeroPrimary from "@/components/hero-primary";
import CollectionRail from "@/components/collection-rail";
import FeatureGrid from "@/components/feature-grid";
import ProductGrid from "@/components/product-grid";
import CtaBanner from "@/components/cta-banner";
import Testimonials from "@/components/testimonials";
import InstagramFeed from "@/components/instagram-feed";
import TagCloud from "@/components/tag-cloud";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";
import { collections } from "@/data/collections";
import { featuredProducts, products } from "@/data/products";
import { aromaOptions } from "@/data/site";

const soyBenefits = [
  {
    title: "No contamina tu hogar",
    description: "La cera de soya es vegetal, hipoalergénica y libre de parafinas, perfecta para espacios cerrados.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 20c-5 0-9-4.03-9-9 0-2.8 1.15-5.33 3-7.17A10.21 10.21 0 0 1 12 1c1.8 0 3.5.44 5 1.23C19.81 4.1 21 6.6 21 9.4c0 4.97-4 9-9 9Z" />
        <path d="M12 12c-2.33 0-4 1.67-4 4" />
      </svg>
    ),
  },
  {
    title: "Cruelty-free",
    description: "Trabajamos con proveedores certificados y procesos libres de pruebas en animales.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 21c-4.5 0-8-3.57-8-7.98 0-1.86.72-3.64 2.03-4.95L9 5l3 3 3-3 3.07 3.07A6.98 6.98 0 0 1 20 13.02C20 17.43 16.5 21 12 21Z" />
        <path d="M9 14s1.2 1.5 3 1.5S15 14 15 14" />
      </svg>
    ),
  },
  {
    title: "Mayor durabilidad",
    description: "Nuestras velas se derriten a menor temperatura, ofreciendo combustiones más prolongadas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 2s3 2.5 3 5.5S12 13 12 13s-3-3-3-5.5S12 2 12 2Z" />
        <path d="M6 14h12" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    title: "Fragancias naturales",
    description: "Aceites esenciales y fragancias premium que armonizan con cada ambiente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 2c2 1.5 3 3.5 3 6 0 2.5-1 4.5-3 6-2-1.5-3-3.5-3-6 0-2.5 1-4.5 3-6Z" />
        <path d="M7 14a5 5 0 0 0 10 0" />
      </svg>
    ),
  },
];

const homeHighlights = products.filter((product) =>
  ["arbol-navideno-10x5", "flor-peonia-4x8", "champagne-20x6"].includes(product.slug),
);

export default function Home() {
  return (
    <>
      <HeroPrimary
        eyebrow="Velas & Aroma"
        title="Velas de soya artesanales que abrazan cada momento."
        description="Creamos colecciones inspiradas en los paisajes y celebraciones ecuatorianas. Personaliza tu fragancia, color y empaque para regalar o transformar tu espacio."
        primaryCta={{ label: "Ver tienda", href: "/tienda" }}
        secondaryCta={{ label: "Conoce nuestros servicios", href: "/servicios" }}
      />

      <CollectionRail collections={collections} />

      <FeatureGrid
        eyebrow="Beneficios"
        title="¿Por qué elegir velas de soya Velas & Aroma?"
        features={soyBenefits}
      />

      <TagCloud
        eyebrow="Aromas disponibles"
        title="Aromas que puedes elegir para tu vela ideal."
        description="Selecciona uno de nuestros blends botánicos o combínalos en sets personalizados."
        items={[...aromaOptions]}
      />

      <ProductGrid
        eyebrow="Top ventas"
        title="Piezas favoritas de la comunidad."
        description="Descubre los diseños que más se llevan para regalos, rituales personales y decoración."
        products={featuredProducts}
      />

      <PageSection className="md:px-10">
        <SectionIntro
          eyebrow="Catálogo curado"
          title="Colecciones destacadas para cada temporada."
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {homeHighlights.map((product) => (
            <BorderPanel key={product.id} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-brand-brown">{product.nombre}</h3>
              <p className="text-sm text-brand-charcoal/85">{product.descripcionCorta}</p>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">
                Desde ${product.precioBase.toFixed(2)}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-brand-charcoal/70">
                {product.aromasDisponibles.slice(0, 3).map((aroma) => (
                  <span key={aroma} className="rounded-full border border-brand-brown/40 px-2 py-1">
                    {aroma}
                  </span>
                ))}
              </div>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <CtaBanner
        title="Personaliza colores y aromas para tus eventos."
        description="Creamos kits temáticos, recordatorios y ediciones especiales. Escoge paletas, fragancias, envoltorios y mensajes personalizados."
        cta={{ label: "Solicita una cotización", href: "/servicios" }}
      />

      <Testimonials />
      <InstagramFeed />
    </>
  );
}
