"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartNavLink from "@/components/cart-nav-link";
import ThemeToggle from "@/components/theme-toggle";

type NavItem = {
  href: string;
  label: string;
};

type HeaderNavigationProps = {
  navItems: NavItem[];
};

export default function HeaderNavigation({ navItems }: HeaderNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-4">
      <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.25em] text-brand-brown/70 lg:flex">
        {navItems.map((item) =>
          item.href === "/carrito" ? (
            <CartNavLink key={item.href} href={item.href} label={item.label} variant="desktop" />
          ) : (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-brown">
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <div className="hidden lg:inline-flex">
        <ThemeToggle />
      </div>

      <button
        type="button"
        aria-label="Abrir menú"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded border border-brand-brown/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown transition hover:border-brand-brown lg:hidden"
      >
        {open ? "✕ Cerrar" : "☰ Menú"}
      </button>

      {open ? (
        <div className="fixed left-0 right-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-brand-sand/70 bg-brand-cream/98 px-6 py-6 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown/80">
            {navItems.map((item) =>
              item.href === "/carrito" ? (
                <CartNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  variant="mobile"
                  onClick={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-brand-brown"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-6">
            <ThemeToggle className="w-full justify-center" compact />
          </div>
        </div>
      ) : null}
    </div>
  );
}
