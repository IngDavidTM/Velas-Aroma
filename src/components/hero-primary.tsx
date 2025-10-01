import Link from "next/link";
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
  return (
    <section
      className={cn(
        "flex flex-col gap-6 px-4 py-16 sm:px-6 md:px-10 md:py-20",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/70">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
        {title}
      </h1>
      <p className="max-w-2xl text-base text-brand-brown/85 sm:text-lg">{description}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href={primaryCta.href}
          className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown bg-brand-brown px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-charcoal"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta ? (
          <Link
            href={secondaryCta.href}
            className="inline-flex min-h-[44px] items-center justify-center border border-brand-brown/60 px-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-brown transition hover:border-brand-brown hover:text-brand-charcoal"
          >
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
