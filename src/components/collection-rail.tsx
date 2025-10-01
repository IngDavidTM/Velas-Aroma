import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Collection } from "@/data/collections";
import SectionIntro from "@/components/section-intro";

interface CollectionRailProps {
  collections: Collection[];
  className?: string;
}

export default function CollectionRail({ collections, className }: CollectionRailProps) {
  return (
    <section className={cn("px-4 py-14 sm:px-6 md:px-10", className)}>
      <SectionIntro
        eyebrow="Colecciones"
        title="Descubre nuestras velas por atmósfera." 
        description="Selecciona la colección que mejor resuena con el momento que quieres crear."
        className="mb-8"
      />
      <div className="grid gap-6 md:grid-cols-4">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/categoria/${collection.slug}`}
            className="group flex h-full flex-col overflow-hidden border border-brand-sand/70"
          >
            <div className="relative h-40 w-full bg-brand-sand/30">
              <Image
                src={collection.heroImage}
                alt={collection.title}
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-cream/70 to-transparent transition group-hover:from-brand-brown/30" />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-5 py-6">
              <h3 className="text-lg font-semibold text-brand-brown">{collection.title}</h3>
              <p className="text-sm text-brand-charcoal/85">{collection.description}</p>
              <span className="mt-auto inline-flex items-center text-xs font-medium uppercase tracking-[0.3em] text-brand-brown/80">
                Ver colección →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
