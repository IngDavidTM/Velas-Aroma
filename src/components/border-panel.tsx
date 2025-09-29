import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type BorderPanelProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function BorderPanel<T extends ElementType = "div">({
  as,
  className,
  ...props
}: BorderPanelProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      {...props}
      className={cn("border border-brand-sand/70 p-6", className)}
    />
  );
}
