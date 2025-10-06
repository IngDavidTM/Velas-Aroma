import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
}

export default function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className={cn(
        "group border border-brand-sand/70 transition hover:-translate-y-1 hover:shadow-lg",
        layout === "list" ? "flex gap-6" : "flex flex-col",
      )}
    >
      <div className={cn("relative bg-brand-sand/25", layout === "list" ? "h-32 w-32" : "h-52 w-full") }>
        <Image
          src={product.imagenes[0] ?? "/images/products/placeholder.jpg"}
          alt={product.nombre}
          fill
          sizes={layout === "list" ? "128px" : "(max-width:768px) 100vw, 25vw"}
          className="object-cover"
        />
      </div>
      <div className={cn("p-5", layout === "list" ? "flex-1" : "flex flex-col gap-2") }>
        <h3 className="text-base font-semibold text-brand-brown">{product.nombre}</h3>
        <p className="text-sm text-brand-charcoal/80">{product.descripcionCorta}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-brown/70">
          <span>${product.precioBase.toFixed(2)}</span>
          <span>{product.medidas.altoCm}×{product.medidas.anchoCm} cm</span>
          {product.personalizable ? (
            <span className="rounded-full border border-brand-brown/60 px-2 py-1 text-[0.6rem]">
              Personalizable
            </span>
          ) : null}
          {product.tags?.includes("combo") ? (
            <span className="rounded-full border border-brand-brown/60 px-2 py-1 text-[0.6rem]">
              Combo
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
