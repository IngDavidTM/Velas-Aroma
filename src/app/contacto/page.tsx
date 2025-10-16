import Link from "next/link";
import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";
import { buildWhatsappLink, contactInfo } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Contacto"
        title="Conversemos sobre la atmósfera que quieres crear."
        description="Agenda una consulta, personaliza tu pedido o coordina un retiro en nuestro showroom."
        className="mb-10"
      />

      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <BorderPanel className="space-y-6">
          <h3 className="text-lg font-semibold text-brand-brown">Formulario express</h3>
          <form className="grid gap-6 md:grid-cols-2">
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
            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
              Teléfono
              <input
                type="tel"
                name="phone"
                className="border border-brand-sand/70 bg-transparent px-4 py-3 text-brand-charcoal focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown/50"
                placeholder="Ej. +593 98..."
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
              className="md:col-span-2 inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
            >
              Enviar mensaje
            </button>
          </form>
        </BorderPanel>

        <div className="space-y-6">
          <BorderPanel className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Contacto directo</p>
            <Link
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center border border-brand-brown bg-brand-brown px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
            >
              WhatsApp
            </Link>
            <Link href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center border border-brand-brown/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown transition hover:border-brand-brown hover:text-brand-charcoal">
              Instagram {contactInfo.instagram}
            </Link>
            <p className="text-sm text-brand-charcoal/80">
              También puedes escribirnos a <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a>
            </p>
          </BorderPanel>

          <BorderPanel className="space-y-2 text-sm text-brand-charcoal/80">
            <p className="font-semibold uppercase tracking-[0.2em] text-brand-brown">Showroom</p>
            <p>{contactInfo.address}</p>
            <p>Horarios: {contactInfo.schedule}</p>
          </BorderPanel>

          <div className="relative h-56 w-full overflow-hidden border border-brand-sand/70">
            <iframe
              title="Mapa Velas & Aroma"
              src="https://www.google.com/maps?q=-0.212382,-78.407931&z=16&hl=es-419&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
