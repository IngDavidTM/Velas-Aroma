import Link from "next/link";
import SectionIntro from "@/components/section-intro";
import BorderPanel from "@/components/border-panel";
import { products } from "@/data/products";

const mockCart = products.slice(0, 2).map((product, index) => ({
  product,
  quantity: index + 1,
  selectedAroma: product.aromasDisponibles[0],
  selectedColor: product.coloresDisponibles[0],
  extra: product.extras?.[0],
}));

const subtotal = mockCart.reduce((acc, item) => {
  const base = item.product.precioBase * item.quantity;
  const extra = item.extra ? item.extra.precio * item.quantity : 0;
  return acc + base + extra;
}, 0);

export default function CartPage() {
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
          {mockCart.map(({ product, quantity, selectedAroma, selectedColor, extra }) => (
            <BorderPanel key={product.id} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-brand-brown">{product.nombre}</h3>
                <p className="text-sm text-brand-charcoal/80">Aroma: {selectedAroma}</p>
                <p className="text-sm text-brand-charcoal/80">Color: {selectedColor}</p>
                {extra ? (
                  <p className="text-sm text-brand-charcoal/80">
                    Extra: {extra.nombre} (+${extra.precio.toFixed(2)})
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-4 text-sm text-brand-charcoal/85">
                <span>Cant. {quantity}</span>
                <span className="font-semibold text-brand-brown">
                  ${(product.precioBase * quantity + (extra?.precio ?? 0) * quantity).toFixed(2)}
                </span>
              </div>
            </BorderPanel>
          ))}

          <label className="flex flex-col gap-2 text-sm text-brand-charcoal/90">
            Notas al vendedor
            <textarea
              rows={4}
              className="border border-brand-sand/70 px-4 py-3 focus:border-brand-brown focus:outline-none"
              placeholder="Ej. Empacar como regalo, incluir tarjeta personal, etc."
            />
          </label>
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
