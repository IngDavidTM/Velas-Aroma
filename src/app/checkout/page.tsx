import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";

export default function CheckoutPage() {
  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Checkout"
        title="Completa tu pedido de forma segura."
        description="Ingresa tus datos, selecciona envío o retiro y confirma el método de pago."
        className="mb-10"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">1. Datos personales</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
                Nombre completo
                <input
                  type="text"
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
                Correo electrónico
                <input
                  type="email"
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 md:col-span-2">
                Teléfono
                <input
                  type="tel"
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                />
              </label>
            </div>
          </BorderPanel>

          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">2. Envío o retiro</h3>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input type="radio" name="delivery" defaultChecked />
              Envío a domicilio (se calcula según zona)
            </label>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input type="radio" name="delivery" />
              Retiro en showroom (Pasaje Rumiñahui y Francisco de Orellana, Tumbaco)
            </label>
            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
              Dirección (si aplica)
              <input
                type="text"
                className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                placeholder="Calle, número, referencias"
              />
            </label>
          </BorderPanel>

          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">3. Pago</h3>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input type="radio" name="payment" defaultChecked />
              Pasarela (Stripe/Mercado Pago)
            </label>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input type="radio" name="payment" />
              Transferencia bancaria
            </label>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input type="checkbox" />
              Acepto términos y políticas de devolución
            </label>
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
            >
              Confirmar pedido
            </button>
          </BorderPanel>
        </div>

        <BorderPanel className="space-y-4">
          <h3 className="text-lg font-semibold text-brand-brown">Resumen</h3>
          <div className="space-y-2 text-sm text-brand-charcoal/80">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$00.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Envío estimado</span>
              <span>Se calcula según zona</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-brand-sand/70 pt-3 text-sm font-semibold text-brand-brown">
            <span>Total</span>
            <span>$00.00</span>
          </div>
          <p className="text-xs text-brand-brown/70">
            Recibirás un número de pedido y confirmación en tu correo. Contáctanos si necesitas ayuda con tu pago.
          </p>
        </BorderPanel>
      </div>
    </div>
  );
}
