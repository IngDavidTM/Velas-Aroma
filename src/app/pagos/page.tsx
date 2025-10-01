import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import BorderPanel from "@/components/border-panel";

export default function PaymentsPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Pagos"
        title="Métodos seguros y transparentes para completar tu compra."
        description="Trabajamos con pasarelas certificadas y opciones locales para que escojas la que más te convenga."
        className="mb-10"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <BorderPanel>
          <h3 className="text-lg font-semibold text-brand-brown">Pasarelas disponibles</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-charcoal/80">
            <li>Stripe: tarjetas de crédito/débito internacionales.</li>
            <li>Mercado Pago: tarjetas locales, transferencias y puntos físicos.</li>
            <li>Transferencia bancaria directa (Ecuador).</li>
          </ul>
        </BorderPanel>
        <BorderPanel>
          <h3 className="text-lg font-semibold text-brand-brown">Moneda y seguridad</h3>
          <p className="mt-3 text-sm text-brand-charcoal/80">
            Todos los precios están en USD e incluyen impuestos aplicables. Las transacciones se procesan con cifrado SSL y cumplimiento PCI. No almacenamos datos sensibles en nuestros servidores.
          </p>
        </BorderPanel>
      </div>

      <PageSection bordered={false} className="mt-12 border border-brand-sand/70 p-6">
        <h3 className="text-lg font-semibold text-brand-brown">Reembolsos y cambios</h3>
        <p className="mt-3 text-sm text-brand-charcoal/80">
          Aceptamos cambios por productos dañados durante el transporte dentro de los 3 días hábiles posteriores a la entrega. Para pedidos personalizados, coordinamos una solución caso por caso. Escríbenos con tu número de pedido y fotos de referencia.
        </p>
      </PageSection>
    </div>
  );
}
