import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import BorderPanel from "@/components/border-panel";
import CtaBanner from "@/components/cta-banner";
import { services } from "@/data/services";
import { serviceChips } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Servicios"
        title="Creamos experiencias aromáticas para eventos, marcas y recuerdos personalizados."
        description="Cuéntanos tu idea y preparamos propuestas con fragancias, colores y empaques a medida."
        className="mb-10"
      />

      <PageSection bordered={false} className="border border-brand-sand/70 bg-brand-sand/30">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Eventos</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {serviceChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-brand-brown/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-brown/80"
            >
              {chip}
            </span>
          ))}
        </div>
      </PageSection>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <BorderPanel key={service.tipo}>
            <h3 className="text-lg font-semibold text-brand-brown">
              {service.tipo === "eventos"
                ? "Eventos"
                : service.tipo === "mayor"
                ? "Trabajos al por mayor"
                : service.tipo === "personalizado"
                ? "Proyectos personalizados"
                : "Wax melts"}
            </h3>
            <p className="mt-3 text-sm text-brand-charcoal/85">{service.descripcion}</p>
            {service.cta ? (
              <a
                href="#cotizacion"
                className="mt-6 inline-flex min-h-[40px] items-center justify-center border border-brand-brown px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-brown transition hover:bg-brand-brown hover:text-brand-cream"
              >
                {service.cta}
              </a>
            ) : null}
          </BorderPanel>
        ))}
      </div>

      <PageSection id="cotizacion" bordered={false} className="mt-16 border border-brand-sand/70 p-6">
        <h3 className="text-lg font-semibold text-brand-brown">Formulario de brief</h3>
        <p className="mt-3 text-sm text-brand-charcoal/80">
          Cuéntanos sobre tu evento para construir un moodboard y propuesta personalizada.
        </p>
        <form className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Nombre y apellido
            <input
              type="text"
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Tu nombre"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Correo electrónico
            <input
              type="email"
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="hola@correo.com"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Tipo de evento
            <input
              type="text"
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Cumpleaños, boda, corporativo, etc."
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Cantidades estimadas
            <input
              type="number"
              min={10}
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Ej. 50"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 md:col-span-2">
            Aromas deseados y paleta de color
            <textarea
              rows={4}
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Cuéntanos qué aromas imaginas, tonos o referencias visuales"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 md:col-span-2">
            Fecha de entrega
            <input
              type="date"
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
          >
            Enviar brief
          </button>
        </form>
      </PageSection>

      <CtaBanner
        title="¿Quieres ver muestras en persona?"
        description="Agenda una visita a nuestro showroom en Tumbaco y experimenta los aromas y acabados antes de confirmar tu pedido."
        cta={{ label: "Reservar visita", href: "/contacto" }}
        className="mt-16"
      />
    </div>
  );
}
