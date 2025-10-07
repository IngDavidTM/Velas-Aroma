"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";
import { useCart } from "@/components/cart-provider";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [orderNotes, setOrderNotes] = useState("");

  if (items.length === 0) {
    return (
      <div className="px-4 py-14 sm:px-6 md:px-10">
        <SectionIntro
          eyebrow="Carrito"
          title="Tu carrito está vacío."
          description="Explora nuestras colecciones y añade tus velas favoritas."
          className="mb-10"
        />
        <Link
          href="/tienda"
          className="inline-flex items-center justify-center border border-brand-brown bg-brand-brown px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-14 sm:px-6 md:px-10">
      <SectionIntro
        eyebrow="Carrito"
        title="Revisa tu selección antes de finalizar la compra."
        description="Confirma aromas, colores y extras para asegurar que todo llegue perfecto."
        className="mb-10"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          {items.map((item) => {
            const extrasTotal = item.extras.reduce((sum, extra) => sum + extra.precio, 0);
            const lineTotal = (item.precioBase + extrasTotal) * item.quantity;

            return (
              <BorderPanel key={item.id} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden border border-brand-sand/70">
                    <Image
                      src={item.image}
                      alt={item.nombre}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-brown">{item.nombre}</h3>
                    {item.aroma ? (
                      <p className="text-sm text-brand-charcoal/80">Aroma: {item.aroma}</p>
                    ) : null}
                    {item.color ? (
                      <p className="text-sm text-brand-charcoal/80">Color: {item.color}</p>
                    ) : null}
                    {item.extras.length ? (
                      <ul className="mt-1 space-y-1 text-sm text-brand-charcoal/80">
                        {item.extras.map((extra) => (
                          <li key={extra.nombre}>
                            Extra: {extra.nombre} (+${extra.precio.toFixed(2)})
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown underline"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between gap-3 text-sm text-brand-charcoal/85 sm:justify-end">
                  <div className="inline-flex items-center rounded border border-brand-sand/70">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-sm font-semibold text-brand-brown transition hover:bg-brand-sand/40"
                    >
                      –
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(item.id, Math.min(Math.max(Number(event.target.value) || 1, 1), 99))
                      }
                      className="w-16 border-x border-brand-sand/70 bg-transparent text-center text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-sm font-semibold text-brand-brown transition hover:bg-brand-sand/40"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-semibold text-brand-brown">${lineTotal.toFixed(2)}</span>
                </div>
              </BorderPanel>
            );
          })}

          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Notas al vendedor
            <textarea
              rows={4}
              value={orderNotes}
              onChange={(event) => setOrderNotes(event.target.value)}
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Ej. Empacar como regalo, incluir tarjeta personal, etc."
            />
          </label>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown underline"
          >
            Vaciar carrito
          </button>
        </div>

        <BorderPanel className="space-y-5">
          <h3 className="text-lg font-semibold text-brand-brown">Resumen</h3>
          <div className="space-y-3 text-sm text-brand-charcoal/80">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Envío estimado</span>
              <span>Se calcula en checkout</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-brand-sand/70 pt-3 text-sm font-semibold text-brand-brown">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="inline-flex w-full items-center justify-center border border-brand-brown bg-brand-brown px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
          >
            Ir a pagar
          </Link>
        </BorderPanel>
      </div>
    </div>
  );
}
