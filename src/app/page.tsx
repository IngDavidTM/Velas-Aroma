import Link from "next/link";
import BorderPanel from "@/components/border-panel";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";

const collectionHighlights = [
  {
    title: "Velas botánicas",
    description:
      "Cera de soya y aceites esenciales en mezclas equilibradas que llenan tu espacio sin saturarlo.",
    detail: "Notas estrella: vainilla especiada, cedro y bergamota dulce.",
  },
  {
    title: "Ediciones de temporada",
    description:
      "Series limitadas inspiradas en festividades andinas y paisajes ecuatorianos.",
    detail: "Empaques reutilizables y tarjetas personalizadas lista para regalo.",
  },
  {
    title: "Ritual de bienestar",
    description:
      "Guía sensorial para acompañar tu vela con respiraciones, afirmaciones y música curada.",
    detail: "Acceso a playlists y meditaciones exclusivas.",
  },
  {
    title: "Círculo sustentable",
    description:
      "Programa de recarga y retornos para dar nueva vida a tus recipientes favoritos.",
    detail: "Descuentos especiales por cada contenedor devuelto.",
  },
];

const ritualMoments = [
  {
    heading: "Atmósfera calma",
    text: "Lavanda, salvia y un toque de sándalo para tu rincón de lectura.",
  },
  {
    heading: "Impulso creativo",
    text: "Mandarina, té blanco y romero que energizan tus sesiones de trabajo.",
  },
  {
    heading: "Cena íntima",
    text: "Cardamomo, miel ahumada y cedro para momentos memorables.",
  },
];

const values = [
  {
    heading: "Hecho en Quito",
    body: "Pequeños lotes elaborados a mano con ingredientes locales y responsables.",
  },
  {
    heading: "Comunidad",
    body: "Personalizamos aromas para eventos, marcas aliadas y rituales familiares.",
  },
  {
    heading: "Transparencia",
    body: "Compartimos origen de cada insumo y ofrecemos recargas para reducir desperdicios.",
  },
];

export default function Home() {
  return (
    <>
      <PageSection className="md:px-10 md:py-20">
        <div className="space-y-6 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/70">
            Aromas que habitan tu espacio
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.07]">
            Velas artesanales que conectan tus sentidos con momentos de calma y calidez.
          </h1>
          <p className="text-base text-brand-brown/85 sm:text-lg">
            Cada creación se vierte a mano utilizando cera de soya, mechas de algodón y aceites esenciales
            cuidadosamente seleccionados para mantener la armonía en tu hogar.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/coleccion"
              className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-charcoal transition hover:bg-brand-brown hover:text-brand-cream"
            >
              Ver colección
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-[44px] items-center justify-center border border-brand-charcoal px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-charcoal transition hover:bg-brand-charcoal hover:text-brand-cream"
            >
              Agenda asesoría
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection id="coleccion" className="md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <SectionIntro
          eyebrow="Colección boutique"
          title="Selecciona la vela que resuena con tu atmósfera ideal."
          description="Utilizamos tonos cálidos y detalles neutros para integrarse a cualquier estilo de interiorismo."
          className="mb-10 md:col-span-4 md:mb-0"
        />
        <div className="space-y-8 md:col-span-8">
          {collectionHighlights.map((item) => (
            <BorderPanel
              as="article"
              key={item.title}
              className="grid gap-3 md:grid-cols-3 md:items-center md:gap-6"
            >
              <h3 className="text-lg font-semibold text-brand-brown md:col-span-1">{item.title}</h3>
              <p className="text-sm text-brand-charcoal md:col-span-1">{item.description}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-brand-brown/80 md:col-span-1">
                {item.detail}
              </p>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <PageSection id="rituales" className="md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <SectionIntro
          eyebrow="Rituales sensoriales"
          title="Diseña experiencias para acompañar cada instante del día."
          description="Combina playlists, respiraciones y luz cálida para transformar ambientes cotidianos en refugios memorables."
          className="mb-10 md:col-span-4 md:mb-0"
        />
        <div className="space-y-6 md:col-span-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {ritualMoments.map((moment) => (
            <BorderPanel
              key={moment.heading}
              className="flex h-full flex-col justify-between"
            >
              <h3 className="text-base font-semibold text-brand-brown">{moment.heading}</h3>
              <p className="mt-4 text-sm text-brand-charcoal/90">{moment.text}</p>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <PageSection className="md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <SectionIntro
          eyebrow="Nuestro manifiesto"
          title="Sostenemos vínculos a través del aroma."
          className="mb-10 md:col-span-4 md:mb-0"
        />
        <div className="space-y-6 md:col-span-8">
          {values.map((value) => (
            <BorderPanel key={value.heading}>
              <h3 className="text-lg font-semibold text-brand-brown">{value.heading}</h3>
              <p className="mt-3 text-sm text-brand-charcoal/90">{value.body}</p>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <PageSection id="contacto" bordered={false} className="md:px-10">
        <div className="border border-brand-charcoal bg-brand-brown px-6 py-12 text-brand-cream md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-cream/80">Contacto directo</p>
          <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
            Agenda una asesoría olfativa personalizada.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-brand-cream/85 sm:text-base">
            Escríbenos para recibir recomendaciones según la ocasión, el tamaño de tu espacio y la energía que deseas potenciar.
          </p>
          <div className="mt-10 grid gap-6 text-sm sm:grid-cols-3 sm:text-base">
            <div>
              <p className="font-semibold uppercase tracking-[0.15em] text-brand-cream">Teléfono</p>
              <a href="tel:+593987832616" className="mt-2 inline-block text-brand-cream/85">
                +593 98 783 2616
              </a>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.15em] text-brand-cream">Instagram</p>
              <a
                href="https://instagram.com/velasyaroma.ec"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-brand-cream/85"
              >
                @velasyaroma.ec
              </a>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.15em] text-brand-cream">Showroom</p>
              <p className="mt-2 text-brand-cream/85">
                Pasaje Rumiñahui y Francisco de Orellana, Tumbaco
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
