import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import BorderPanel from "@/components/border-panel";
import { contactInfo, shippingFaq } from "@/data/site";

export default function ShippingPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Envíos"
        title="Llevamos tus velas donde las necesites."
        description="Entregamos en Quito, Cumbayá y Tumbaco con recargo según zona. También puedes retirar gratuitamente en nuestro showroom."
        className="mb-10"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <BorderPanel>
          <h3 className="text-lg font-semibold text-brand-brown">Cobertura y costos</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-charcoal/80">
            <li>Quito urbano: $4</li>
            <li>Cumbayá / Tumbaco: $3</li>
            <li>Valle de Los Chillos y norte de Quito: $4</li>
            <li>Entregas de hasta 12 artículos: tiempo estimado mínimo de 48 horas.</li>
            <li>Entregas superiores a 12 artículos: tiempo estimado mínimo de 1 semana.</li>
          </ul>
        </BorderPanel>
        <BorderPanel>
          <h3 className="text-lg font-semibold text-brand-brown">Políticas de entrega</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-charcoal/80">
            <li>Coordinamos horario con 48h de anticipación para pedidos pequeños y 1 semana en pedidos grandes.</li>
            <li>Reintentos adicionales generan recargo según zona.</li>
            <li>Retiro sin costo en el showroom: {contactInfo.address}.</li>
          </ul>
        </BorderPanel>
      </div>

      <PageSection bordered={false} className="mt-12 border border-brand-sand/70 p-6">
        <h3 className="text-lg font-semibold text-brand-brown">Preguntas frecuentes</h3>
        <div className="mt-4 space-y-6">
          {shippingFaq.map((item) => (
            <div key={item.question}>
              <p className="text-sm font-semibold text-brand-brown">{item.question}</p>
              <p className="mt-2 text-sm text-brand-charcoal/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
