import Image from "next/image";
import Link from "next/link";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { contactInfo } from "@/data/site";

const mockFeed = [
  "/images/ig/feed-1.jpg",
  "/images/ig/feed-2.jpg",
  "/images/ig/feed-3.jpg",
  "/images/ig/feed-4.jpg",
  "/images/ig/feed-5.jpg",
  "/images/ig/feed-6.jpg",
];

export default function InstagramFeed() {
  return (
    <PageSection className="md:px-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <SectionIntro
          eyebrow="Instagram"
          title="Sigue nuestro proceso creativo y lanzamientos."
          className="mb-0"
        />
        <Link
          href={contactInfo.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[40px] items-center justify-center border border-brand-brown px-5 text-xs font-medium uppercase tracking-[0.2em] text-brand-brown transition hover:bg-brand-brown hover:text-brand-cream"
        >
          {contactInfo.instagram}
        </Link>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3 md:grid-cols-6">
        {mockFeed.map((image) => (
          <div key={image} className="relative aspect-square bg-brand-sand/40">
            <Image src={image} alt="Instagram" fill sizes="(max-width:768px) 50vw, 16vw" className="object-cover" />
          </div>
        ))}
      </div>
    </PageSection>
  );
}
