import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers";
import HeaderNavigation from "@/components/header-navigation";
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-brown focus:px-4 focus:py-2 focus:text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-brown"
          >
            Saltar al contenido principal
          </a>
          <div className="min-h-screen">
            <header className="relative z-50 border-b border-brand-sand/70 bg-brand-cream/95 backdrop-blur">
              <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6">
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
                    sizes="56px"
                    className="h-12 w-12 rounded-full shadow-sm shadow-brand-sand/40 dark:shadow-brand-brown/40"
                  />
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-brown">
                    Velas &amp; Aroma
                  </span>
                </Link>
                <HeaderNavigation navItems={navItems} />
              </div>
            </header>

            <main id="main-content" className="mx-auto w-full max-w-8xl md:border-l md:border-r md:border-brand-sand/60">
              {children}
            </main>

            <footer className="border-t border-brand-sand/70 bg-brand-cream/95">
              <div className="mx-auto flex max-w-8xl flex-col gap-2 px-4 py-6 text-xs text-brand-brown/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
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
