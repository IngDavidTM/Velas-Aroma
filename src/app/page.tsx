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
  },
  {
    title: "Cruelty-free",
    description: "Trabajamos con proveedores certificados y procesos libres de pruebas en animales.",
  },
  {
    title: "Mayor durabilidad",
    description: "Nuestras velas se derriten a menor temperatura, ofreciendo combustiones más prolongadas.",
  },
  {
    title: "Fragancias naturales",
    description: "Aceites esenciales y fragancias premium que armonizan con cada ambiente.",
  },
];

const homeHighlights = products.filter((product) =>
  ["arbol-navideno-clasico", "peonia-escultorica", "coleccion-unicos"].includes(
    product.slug,
  ),
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
