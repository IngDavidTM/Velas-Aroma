import BorderPanel from "@/components/border-panel";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  features: Array<{ title: string; description: string }>;
}

export default function FeatureGrid({ eyebrow, title, features }: FeatureGridProps) {
  return (
    <PageSection className="md:px-10">
      <SectionIntro eyebrow={eyebrow} title={title} className="mb-8" />
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <BorderPanel key={feature.title}>
            <h3 className="text-lg font-semibold text-brand-brown">{feature.title}</h3>
            <p className="mt-3 text-sm text-brand-charcoal/85">{feature.description}</p>
          </BorderPanel>
        ))}
      </div>
    </PageSection>
  );
}
