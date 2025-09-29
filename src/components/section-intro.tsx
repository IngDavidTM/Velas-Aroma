import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl leading-tight sm:text-4xl", titleClassName)}>{title}</h2>
      {description ? (
        <p className={cn("text-sm text-brand-brown/85", descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  );
}
