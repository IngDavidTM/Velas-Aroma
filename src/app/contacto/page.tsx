import BorderPanel from "@/components/border-panel";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";

const contactChannels = [
  {
    heading: "Llámanos",
    detail: "+593 98 783 2616",
    description: "Atendemos de lunes a viernes de 09:00 a 18:00 y sábados de 10:00 a 14:00.",
    link: "tel:+593987832616",
  },
  {
    heading: "Escríbenos",
    detail: "hola@velasyaroma.ec",
    description: "Respondemos consultas, pedidos personalizados y colaboraciones en menos de 24 horas.",
    link: "mailto:hola@velasyaroma.ec",
  },
  {
    heading: "Instagram",
    detail: "@velasyaroma.ec",
    description: "Descubre lanzamientos especiales, rituales guiados y detrás de cámaras.",
    link: "https://instagram.com/velasyaroma.ec",
  },
];

const showroomInfo = [
  "Pasaje Rumiñahui y Francisco de Orellana, Tumbaco.",
  "Disponibilidad con cita previa de miércoles a sábado.",
  "Sesiones personalizadas para definir fragancias y empaques corporativos.",
];

export default function ContactPage() {
  return (
    <div className="divide-y divide-brand-sand/60">
      <PageSection bordered={false} className="md:px-10">
        <div className="space-y-6 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/70">Contacto</p>
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.07]">
            Conversemos sobre la atmósfera que quieres crear.
          </h1>
          <p className="text-base text-brand-brown/85 sm:text-lg">
            Completa los canales disponibles o agenda una cita para visitarnos en nuestro showroom.
          </p>
        </div>
      </PageSection>

      <PageSection bordered={false} className="md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <SectionIntro
          eyebrow="Canales directos"
          title="Estamos cerca de ti."
          className="mb-10 md:col-span-4 md:mb-0"
        />
        <div className="space-y-6 md:col-span-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {contactChannels.map((channel) => (
            <BorderPanel
              as="a"
              key={channel.heading}
              href={channel.link}
              className="flex h-full flex-col justify-between transition hover:bg-brand-sand/40"
              target={channel.link.startsWith("http") ? "_blank" : undefined}
              rel={channel.link.startsWith("http") ? "noreferrer" : undefined}
            >
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-brand-brown">{channel.heading}</h3>
                <p className="text-sm text-brand-charcoal/90">{channel.description}</p>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-brand-brown/80">{channel.detail}</p>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <PageSection bordered={false} className="md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <SectionIntro
          eyebrow="Showroom"
          title="Visítanos con cita."
          className="mb-10 md:col-span-4 md:mb-0"
        />
        <div className="space-y-6 md:col-span-8">
          {showroomInfo.map((info) => (
            <BorderPanel key={info}>
              <p className="text-sm text-brand-charcoal/90">{info}</p>
            </BorderPanel>
          ))}
        </div>
      </PageSection>

      <PageSection bordered={false} className="md:px-10">
        <div className="border border-brand-sand/70 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Formulario express</p>
          <form className="mt-8 grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
              Nombre Completo
              <input
                type="text"
                name="name"
                className="border border-brand-sand/70 bg-transparent px-4 py-3 text-brand-charcoal focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown/50"
                placeholder="Tu nombre y apellido"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
              Correo electrónico
              <input
                type="email"
                name="email"
                className="border border-brand-sand/70 bg-transparent px-4 py-3 text-brand-charcoal focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown/50"
                placeholder="nombre@correo.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 md:col-span-2">
              Mensaje
              <textarea
                name="message"
                rows={4}
                className="border border-brand-sand/70 bg-transparent px-4 py-3 text-brand-charcoal focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown/50"
                placeholder="Cuéntanos qué experiencia deseas crear"
              />
            </label>
            <button
              type="submit"
              className="border border-brand-charcoal px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-charcoal transition hover:bg-brand-charcoal hover:text-brand-cream md:col-span-2"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </PageSection>
    </div>
  );
}
