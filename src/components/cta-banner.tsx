import Link from "next/link";
import { cn } from "@/lib/cn";

interface CtaBannerProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  className?: string;
}

export default function CtaBanner({ title, description, cta, className }: CtaBannerProps) {
  return (
    <section
      className={cn(
        "px-4 py-14 sm:px-6 md:px-10",
        className,
      )}
    >
      <div className="border border-brand-charcoal bg-brand-brown px-6 py-12 text-brand-cream md:px-12">
        <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-base text-brand-cream/85">{description}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-flex min-h-[44px] items-center justify-center border border-brand-cream px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-cream hover:text-brand-brown"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
