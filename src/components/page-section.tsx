import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  bordered?: boolean;
  className?: string;
  children: ReactNode;
};

export default function PageSection({
  id,
  bordered = true,
  className,
  children,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-14 sm:px-6",
        bordered && "border-b border-brand-sand/60",
        className,
      )}
    >
      {children}
    </section>
  );
}
