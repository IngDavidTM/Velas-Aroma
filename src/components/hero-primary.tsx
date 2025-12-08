"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type HeroPrimaryProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export default function HeroPrimary({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: HeroPrimaryProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={cn(
        "flex flex-col gap-6 px-4 py-16 sm:px-6 md:px-10 md:py-20",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.3em] text-brand-brown/70 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cn(
          "max-w-3xl text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.05] transition-all duration-700",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        {title}
      </h1>
      <p
        className={cn(
          "max-w-2xl text-base text-brand-brown/85 sm:text-lg transition-all duration-700",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "300ms" }}
      >
        {description}
      </p>
      <div
        className={cn(
          "flex flex-col gap-4 sm:flex-row transition-all duration-700",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "400ms" }}
      >
        <Link
          href={primaryCta.href}
          className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition-all hover:bg-brand-charcoal hover:scale-105"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta ? (
          <Link
            href={secondaryCta.href}
            className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown/60 px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown transition-all hover:border-brand-brown hover:text-brand-charcoal hover:scale-105"
          >
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
