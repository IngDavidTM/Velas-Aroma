import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/components/theme-toggle";
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
  { href: "/coleccion", label: "Colección" },
  { href: "/rituales", label: "Rituales" },
  { href: "/contacto", label: "Contacto" },
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
        <div className="min-h-screen">
          <header className="border-b border-brand-sand/70 bg-brand-cream/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <Link
                href="/"
                aria-label="Velas & Aroma inicio"
                className="flex items-center gap-3"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-sand/80 bg-brand-cream shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Velas & Aroma"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-brown">
                  Velas &amp; Aroma
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.25em] text-brand-brown/70 sm:flex">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="transition hover:text-brand-brown">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <ThemeToggle className="hidden sm:inline-flex" />
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-6xl items-center gap-4 border-t border-brand-sand/70 px-4 py-3 sm:hidden">
              <nav className="flex flex-1 items-center gap-4 overflow-x-auto text-[0.7rem] font-medium uppercase tracking-[0.25em] text-brand-brown/70">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="flex-shrink-0 transition hover:text-brand-brown">
                    {item.label}
                  </Link>
                ))}
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
      </body>
    </html>
  );
}
