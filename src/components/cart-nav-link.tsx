"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

type CartNavLinkProps = {
  href: string;
  label: string;
  variant: "desktop" | "mobile";
  onClick?: () => void;
};

export default function CartNavLink({ href, label, variant, onClick }: CartNavLinkProps) {
  const { items } = useCart();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  const baseClass =
    variant === "desktop"
      ? "relative inline-flex items-center gap-2 transition hover:text-brand-brown"
      : "relative inline-flex items-center gap-2 whitespace-nowrap transition hover:text-brand-brown";

  return (
    <Link href={href} onClick={onClick} className={baseClass}>
      <span>{label}</span>
      {count > 0 ? (
        <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-brown px-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-cream">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
