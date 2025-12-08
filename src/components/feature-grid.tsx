"use client";

import { useEffect, useRef } from "react";
import BorderPanel from "@/components/border-panel";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import type { ReactNode } from "react";

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  features: Array<{ title: string; description: string; icon?: ReactNode }>;
}

export default function FeatureGrid({ eyebrow, title, features }: FeatureGridProps) {
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
              }, index * 150);
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
    <PageSection className="md:px-10">
      <SectionIntro eyebrow={eyebrow} title={title} className="mb-8" />
      <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <BorderPanel key={feature.title} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-start gap-4">
              {feature.icon ? (
                <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-sand/50 text-brand-brown transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {feature.icon}
                </span>
              ) : null}
              <div>
                <h3 className="text-lg font-semibold text-brand-brown">{feature.title}</h3>
                <p className="mt-3 text-sm text-brand-charcoal/85">{feature.description}</p>
              </div>
            </div>
          </BorderPanel>
        ))}
      </div>
    </PageSection>
  );
}
