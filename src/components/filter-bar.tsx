import { aromaOptions } from "@/data/site";
import { collections } from "@/data/collections";

export default function FilterBar() {
  return (
    <aside className="space-y-6 border border-brand-sand/70 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Colección</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {collections.map((collection) => (
            <button
              key={collection.slug}
              className="rounded-full border border-brand-brown/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-brown/80 transition hover:border-brand-brown"
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Aromas</p>
        <div className="mt-3 grid gap-2 text-sm text-brand-charcoal/80">
          {aromaOptions.map((aroma) => (
            <label key={aroma} className="flex items-center gap-2">
              <input type="checkbox" className="border-brand-brown/50" />
              <span>{aroma}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Personalizable</p>
        <label className="mt-3 flex items-center gap-2 text-sm text-brand-charcoal/80">
          <input type="checkbox" className="border-brand-brown/50" />
          <span>Mostrar solo personalizables</span>
        </label>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Precio</p>
        <div className="mt-3 space-y-2 text-sm text-brand-charcoal/80">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            <span>Hasta $5</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            <span>$5 - $10</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            <span>$10 - $20</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
