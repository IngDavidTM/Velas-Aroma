"use client";

import { useState } from "react";
import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";
import { useCart } from "@/components/cart-provider";
import { buildWhatsappLink, contactInfo } from "@/data/site";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    metodoEntrega: "domicilio", // domicilio | retiro
    notas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const costEnvio = formData.metodoEntrega === "domicilio" ? 5.0 : 0; // Costo fijo por ahora
  const total = subtotal + costEnvio;

  const handlePlaceOrder = () => {
    if (!formData.nombre || !formData.telefono) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    const itemsList = items
      .map((item) => {
        const extras = item.extras.length
          ? ` (+${item.extras.map((e) => e.nombre).join(", ")})`
          : "";
        return `- ${item.quantity}x ${item.nombre} (${item.aroma}${item.color ? `, ${item.color}` : ""
          })${extras} | $${((item.precioBase + item.extras.reduce((s, e) => s + e.precio, 0)) * item.quantity).toFixed(2)}`;
      })
      .join("\n");

    const message = `*Nuevo Pedido Web - Velas & Aroma*
    
*Cliente:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Email:* ${formData.email}
*Entrega:* ${formData.metodoEntrega === "domicilio" ? "A domicilio" : "Retiro en tienda"}
${formData.metodoEntrega === "domicilio" ? `*Dirección:* ${formData.direccion}` : ""}
*Notas:* ${formData.notas || "Ninguna"}

*Detalle del pedido:*
${itemsList}

*Subtotal:* $${subtotal.toFixed(2)}
*Envío:* $${costEnvio.toFixed(2)}
*TOTAL:* $${total.toFixed(2)}

Hola, quisiera confirmar este pedido y coordinar el pago por transferencia.`;

    const link = buildWhatsappLink(message);
    // clearCart(); // Opcional: limpiar carrito antes o después? Mejor que el usuario lo limpie o se limpie tras éxito confirmado, pero por simplicidad redirigimos primero.
    window.open(link, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="px-4 py-14 sm:px-6 md:px-10 text-center">
        <SectionIntro
          eyebrow="Carrito Vacío"
          title="Tu carrito está vacío."
          description="Agrega productos para proceder al checkout."
          className="mb-8"
        />
      </div>
    );
  }

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Checkout"
        title="Completa tu pedido."
        description="Ingresa tus datos para coordinar el pago y envío por WhatsApp."
        className="mb-10"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">1. Datos personales</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
                Nombre completo *
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 md:col-span-2">
                Teléfono (WhatsApp) *
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                  required
                />
              </label>
            </div>
          </BorderPanel>

          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">2. Envío o retiro</h3>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input
                type="radio"
                name="metodoEntrega"
                value="domicilio"
                checked={formData.metodoEntrega === "domicilio"}
                onChange={(e) => setFormData(prev => ({ ...prev, metodoEntrega: e.target.value }))}
              />
              Envío a domicilio (+$5.00 estimado)
            </label>
            <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
              <input
                type="radio"
                name="metodoEntrega"
                value="retiro"
                checked={formData.metodoEntrega === "retiro"}
                onChange={(e) => setFormData(prev => ({ ...prev, metodoEntrega: e.target.value }))}
              />
              Retiro en showroom ({contactInfo.address})
            </label>

            {formData.metodoEntrega === "domicilio" && (
              <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 mt-2">
                Dirección de entrega
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
                  placeholder="Calle principal, número, calle secundaria"
                />
              </label>
            )}

            <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90 mt-4">
              Notas adicionales del pedido
              <textarea
                name="notas"
                value={formData.notas}
                onChange={handleChange}
                className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none min-h-[80px]"
                placeholder="Instrucciones especiales, dedicatorias, etc."
              />
            </label>
          </BorderPanel>

          {/* Payment Gateway Section - HIDDEN FOR NOW */}
          <div className="hidden opacity-50 pointer-events-none">
            <BorderPanel className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-brown">3. Pago (Deshabilitado)</h3>
              <label className="flex items-center gap-2 text-sm text-brand-charcoal/90">
                <input type="radio" name="payment" disabled />
                Pasarela (Stripe/Mercado Pago)
              </label>
            </BorderPanel>
          </div>

          <BorderPanel className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-brown">3. Confirmación</h3>
            <p className="text-sm text-brand-charcoal/90">
              Al confirmar, serás redirigido a WhatsApp para enviar el detalle de tu pedido y coordinar el pago mediante transferencia bancaria.
            </p>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal w-full sm:w-auto"
            >
              Completar pedido en WhatsApp
            </button>
          </BorderPanel>
        </div>

        <BorderPanel className="space-y-4 h-fit">
          <h3 className="text-lg font-semibold text-brand-brown">Resumen del pedido</h3>
          <div className="space-y-3 text-sm text-brand-charcoal/80 max-h-[300px] overflow-y-auto pr-2">
            {items.map(item => (
              <div key={item.id} className="flex justify-between gap-2 border-b border-brand-sand/30 pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
                <div className="flex flex-col">
                  <span className="font-medium text-brand-brown">{item.quantity}x {item.nombre}</span>
                  <span className="text-xs opacity-80">{item.aroma} {item.color ? `/ ${item.color}` : ''}</span>
                  {item.extras.length > 0 && <span className="text-xs opacity-70">+ {item.extras.length} extras</span>}
                </div>
                <span>${((item.precioBase + item.extras.reduce((s, e) => s + e.precio, 0)) * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-sand/70 pt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Envío</span>
              <span>{costEnvio > 0 ? `$${costEnvio.toFixed(2)}` : 'Gratis / Por cotizar'}</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-brand-sand/70 pt-3 text-base font-semibold text-brand-brown">
            <span>Total Estimado</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-brand-brown/70 mt-4">
            * El costo final de envío puede variar según tu ubicación exacta. Lo confirmaremos por WhatsApp.
          </p>
        </BorderPanel>
      </div>
    </div>
  );
}
