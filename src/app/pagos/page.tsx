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
          <h3 className="text-lg font-semibold text-brand-brown">Métodos de pago aceptados</h3>
          <p className="mt-3 text-sm text-brand-charcoal/80 mb-4">
            Actualmente procesamos todos los pedidos de forma personalizada a través de WhatsApp. Aceptamos:
          </p>
          <ul className="space-y-2 text-sm text-brand-charcoal/80 list-disc list-inside">
            <li>Transferencia bancaria directa (Pichincha, Guayaquil, Produbanco)</li>
            <li>Depósito en efectivo (Mi Vecino / Banco del Barrio)</li>
            <li>Deuna / PayPhone (consultar disponibilidad)</li>
          </ul>
        </BorderPanel>
        <BorderPanel>
          <h3 className="text-lg font-semibold text-brand-brown">¿Cómo funciona?</h3>
          <p className="mt-3 text-sm text-brand-charcoal/80">
            1. Realizas tu pedido en la web.<br />
            2. Te redirigimos a WhatsApp con el detalle.<br />
            3. Te enviamos los datos de cuenta para que realices el pago.<br />
            4. Nos envías el comprobante y coordinamos el envío.
          </p>
          <p className="mt-2 text-sm text-brand-charcoal/80 font-medium">
            Tu compra es 100% segura y cuentas con asistencia personalizada en todo momento.
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
