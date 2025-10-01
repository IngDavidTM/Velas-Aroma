import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <PageSection className="md:px-10">
      <SectionIntro
        eyebrow="Testimonios"
        title="Lo que dicen quienes ya disfrutan Velas & Aroma."
        className="mb-8"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.name}
            className="border border-brand-sand/70 p-6 text-sm text-brand-charcoal/85"
          >
            “{item.quote}”
            <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-brand-brown/70">
              {item.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </PageSection>
  );
}
