import Image from "next/image";
import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import FeatureGrid from "@/components/feature-grid";
import CtaBanner from "@/components/cta-banner";

const storyBenefits = [
  {
    title: "Cera de soya certificada",
    description: "Trabajamos con proveedores locales y regionales que garantizan trazabilidad y cultivos sustentables.",
  },
  {
    title: "Compromiso cruelty-free",
    description: "Ningún insumo se prueba en animales y nuestras fragancias están libres de ftalatos y parabenos.",
  },
  {
    title: "Diseño sensorial",
    description: "Cada colección nace de un moodboard de colores, texturas y aromas inspirados en Ecuador.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Nuestra historia"
        title="Velas & Aroma nació en Tumbaco para convertir rituales cotidianos en experiencias memorables."
        description="Desde 2020 creamos velas artesanales con cera de soya, aromas botánicos y acabados personalizados para hogares y eventos."
        className="mb-10"
      />

      <PageSection bordered={false} className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:px-0">
        <div className="space-y-4 text-sm text-brand-charcoal/85">
          <p>
            Empezamos elaborando velas para nuestras familias y amigas, cuidando que cada aroma evocara un
            momento especial. Hoy producimos colecciones estacionales, ediciones limitadas y líneas para
            marcas aliadas sin perder la esencia artesanal.
          </p>
          <p>
            Creemos en procesos conscientes: trabajamos con cera de soya, mechas de algodón sin plomo y
            pigmentos seguros. Amamos experimentar con moldes, colores y empaques para que cada entrega sea
            recordada.
          </p>
        </div>
        <div className="relative h-64 w-full overflow-hidden border border-brand-sand/70 bg-brand-sand/30">
          <Image
            src="/images/about/taller.jpg"
            alt="Taller Velas & Aroma"
            fill
            sizes="(max-width:768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </PageSection>

      <FeatureGrid
        eyebrow="¿Por qué nuestras velas son mágicas?"
        title="Beneficios que acompañan cada diseño."
        features={storyBenefits}
      />

      <CtaBanner
        title="Visita nuestro taller en Tumbaco."
        description="Agenda una cita para conocer fragancias, ver muestras y diseñar tu colección personalizada."
        cta={{ label: "Quiero agendar", href: "/contacto" }}
        className="mt-16"
      />
    </div>
  );
}
