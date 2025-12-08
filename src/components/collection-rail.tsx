"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import type { Collection } from "@/data/collections";
import SectionIntro from "@/components/section-intro";

interface CollectionRailProps {
  collections: Collection[];
  className?: string;
}

export default function CollectionRail({ collections, className }: CollectionRailProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={cn("px-4 py-14 sm:px-6 md:px-10", className)}>
      <SectionIntro
        eyebrow="Colecciones"
        title="Descubre nuestras velas por atmósfera."
        description="Selecciona la colección que mejor resuena con el momento que quieres crear."
        className="mb-8"
      />
      <div ref={gridRef} className="grid gap-6 md:grid-cols-4">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/categoria/${collection.slug}`}
            className="group flex h-full flex-col overflow-hidden border border-brand-sand/70 opacity-0 translate-y-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-40 w-full bg-brand-sand/30">
              <Image
                src={collection.heroImage}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-cream/70 to-transparent transition group-hover:from-brand-brown/30" />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-5 py-6">
              <h3 className="text-lg font-semibold text-brand-brown">{collection.title}</h3>
              <p className="text-sm text-brand-charcoal/85">{collection.description}</p>
              <span className="mt-auto inline-flex items-center text-xs font-medium uppercase tracking-[0.3em] text-brand-brown/80 transition-transform group-hover:translate-x-1">
                Ver colección →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
