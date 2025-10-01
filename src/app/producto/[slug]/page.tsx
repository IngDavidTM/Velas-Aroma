import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import ProductGrid from "@/components/product-grid";
import BorderPanel from "@/components/border-panel";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { aromaOptions, contactInfo } from "@/data/site";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategory(product.categoria).filter(
    (item) => item.slug !== product.slug,
  );

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden border border-brand-sand/70 bg-brand-sand/30">
            <Image
              src={product.imagenes[0] ?? "/images/products/placeholder.jpg"}
              alt={product.nombre}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.imagenes.slice(1).map((image) => (
              <div key={image} className="relative aspect-square overflow-hidden border border-brand-sand/60">
                <Image src={image} alt={product.nombre} fill sizes="120px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionIntro title={product.nombre} description={product.descripcionCorta} className="mb-0" />
          <div className="flex items-center gap-4 text-lg font-semibold text-brand-brown">
            <span>${product.precioBase.toFixed(2)}</span>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">
              {product.medidas.altoCm}×{product.medidas.anchoCm} cm
            </span>
          </div>

          <div className="space-y-4 text-sm text-brand-charcoal/85">
            <p>{product.descripcionLarga}</p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-brand-brown/70">
              <span className="rounded-full border border-brand-brown/50 px-3 py-1">Hecho a mano</span>
              <span className="rounded-full border border-brand-brown/50 px-3 py-1">Cera de soya</span>
              {product.personalizable ? (
                <span className="rounded-full border border-brand-brown/50 px-3 py-1">
                  Personalizable
                </span>
              ) : null}
            </div>
          </div>

          <form className="space-y-6 border border-brand-sand/70 p-6">
            <div className="grid gap-4 text-sm text-brand-charcoal/80">
              <label className="flex flex-col gap-2">
                Aroma
                <select className="border border-brand-sand/70 bg-transparent px-3 py-2 focus:border-brand-brown focus:outline-none">
                  {product.aromasDisponibles.map((aroma) => (
                    <option key={aroma}>{aroma}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                Color
                <select className="border border-brand-sand/70 bg-transparent px-3 py-2 focus:border-brand-brown focus:outline-none">
                  {product.coloresDisponibles.map((color) => (
                    <option key={color}>{color}</option>
                  ))}
                </select>
              </label>
              {product.extras?.length ? (
                <fieldset className="flex flex-col gap-2">
                  <legend className="text-sm font-medium">Extras</legend>
                  {product.extras.map((extra) => (
                    <label key={extra.nombre} className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>
                        {extra.nombre} (+${extra.precio.toFixed(2)})
                      </span>
                    </label>
                  ))}
                </fieldset>
              ) : null}
              <label className="flex flex-col gap-2">
                Cantidad
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-24 border border-brand-sand/70 px-3 py-2 focus:border-brand-brown focus:outline-none"
                />
              </label>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center border border-brand-brown bg-brand-brown px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
              >
                Añadir al carrito
              </button>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center border border-brand-brown/70 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown transition hover:border-brand-brown hover:text-brand-charcoal"
              >
                Comprar ahora
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <details className="border border-brand-sand/70">
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown">
                Detalles y materiales
              </summary>
              <div className="px-4 py-3 text-sm text-brand-charcoal/80">
                Cera de soya, mecha de algodón sin plomo, fragancias libres de ftalatos. Tiempo de combustión aproximado 30-40 horas.
              </div>
            </details>
            <details className="border border-brand-sand/70">
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown">
                Cuidado y seguridad
              </summary>
              <div className="px-4 py-3 text-sm text-brand-charcoal/80">
                Recorta la mecha a 5 mm antes de encender, evita corrientes de aire y apaga después de 3-4 horas continuas.
              </div>
            </details>
            <details className="border border-brand-sand/70">
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown">
                Envíos y tiempos
              </summary>
              <div className="px-4 py-3 text-sm text-brand-charcoal/80">
                Producción artesanal en 3-5 días hábiles. Envíos locales en Quito y Cumbayá con recargo, retiro sin costo en el showroom de Tumbaco.
              </div>
            </details>
            <details className="border border-brand-sand/70">
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown">
                Personalizaciones
              </summary>
              <div className="px-4 py-3 text-sm text-brand-charcoal/80">
                Añade notas de agradecimiento, etiquetas con branding y empaques especiales. Escríbenos por WhatsApp para coordinar.
              </div>
            </details>
          </div>

          <BorderPanel className="text-sm text-brand-charcoal/80">
            <p className="font-semibold uppercase tracking-[0.2em] text-brand-brown">Necesitas ayuda</p>
            <p className="mt-2">
              Escríbenos a <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a> o envía un mensaje directo a
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer" className="ml-1 underline">
                WhatsApp
              </a> para asistencia personalizada.
            </p>
          </BorderPanel>
        </div>
      </div>

      <ProductGrid
        title="También te puede gustar"
        products={related.slice(0, 3)}
        emptyMessage="Pronto añadiremos más diseños relacionados."
      />
    </div>
  );
}
