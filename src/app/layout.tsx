import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/components/theme-toggle";
import Providers from "@/components/providers";
import CartNavLink from "@/components/cart-nav-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/tienda", label: "Tienda" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/envios", label: "Envíos" },
  { href: "/pagos", label: "Pagos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/carrito", label: "Carrito" },
];

export const metadata: Metadata = {
  title: "Velas & Aroma | Aromas artesanales ecuatorianos",
  description:
    "Velas artesanales hechas en Quito con cera de soya, fragancias botánicas y rituales de bienestar.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-cream text-brand-charcoal`}
      >
        <Providers>
          <div className="min-h-screen">
            <header className="border-b border-brand-sand/70 bg-brand-cream/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <Link
                href="/"
                aria-label="Velas & Aroma inicio"
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="Velas & Aroma"
                  width={56}
                  height={56}
                  priority
                  className="h-12 w-12 rounded-full shadow-sm shadow-brand-sand/40 dark:shadow-brand-brown/40"
                />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-brown">
                  Velas &amp; Aroma
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.25em] text-brand-brown/70 sm:flex">
                  {navItems.map((item) =>
                    item.href === "/carrito" ? (
                      <CartNavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        variant="desktop"
                      />
                    ) : (
                      <Link key={item.href} href={item.href} className="transition hover:text-brand-brown">
                        {item.label}
                      </Link>
                    ),
                  )}
                </nav>
                <div className="hidden sm:inline-flex">
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-t border-brand-sand/70 px-4 py-3 sm:hidden">
              <nav className="flex flex-1 items-center gap-4 overflow-x-auto text-[0.75rem] font-medium uppercase tracking-[0.25em] text-brand-brown/70">
                {navItems.map((item) =>
                  item.href === "/carrito" ? (
                    <CartNavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      variant="mobile"
                    />
                  ) : (
                    <Link key={item.href} href={item.href} className="transition hover:text-brand-brown">
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
              <ThemeToggle className="flex-shrink-0 sm:hidden" compact />
            </div>
            </header>

            <main className="mx-auto w-full max-w-6xl md:border-l md:border-r md:border-brand-sand/60">
              {children}
            </main>

            <footer className="border-t border-brand-sand/70 bg-brand-cream/95">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-brand-brown/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
                <p>&copy; {new Date().getFullYear()} Velas &amp; Aroma. Todos los derechos reservados.</p>
                <p>Hecho a mano en Ecuador.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
