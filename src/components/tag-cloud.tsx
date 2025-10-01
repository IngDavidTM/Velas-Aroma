import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { cn } from "@/lib/cn";

interface TagCloudProps {
  eyebrow?: string;
  title: string;
  items: string[];
  description?: string;
  className?: string;
}

export default function TagCloud({ eyebrow, title, items, description, className }: TagCloudProps) {
  return (
    <PageSection className={cn("md:px-10", className)}>
      <SectionIntro eyebrow={eyebrow} title={title} description={description} className="mb-8" />
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-brand-brown/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-brown/80"
          >
            {item}
          </span>
        ))}
      </div>
    </PageSection>
  );
}
