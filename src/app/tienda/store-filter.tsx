"use client";

import type { Collection } from "@/data/collections";
import type { Aroma } from "@/data/site";

interface FilterSidebarProps {
  collections: Collection[];
  aromaOptions: readonly Aroma[];
  colorOptions: Array<{ label: string; hex: string }>;
  sizeOptions: string[];
  extraOptions: Array<{ label: string; key: string }>;
  selectedCollections: string[];
  onToggleCollection: (slug: string) => void;
  selectedAromas: string[];
  onToggleAroma: (aroma: string) => void;
  selectedColors: string[];
  onToggleColor: (color: string) => void;
  personalizableOnly: boolean;
  onTogglePersonalizable: () => void;
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
  selectedExtras: string[];
  onToggleExtra: (extraLabel: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  collections,
  aromaOptions,
  colorOptions,
  sizeOptions,
  extraOptions,
  selectedCollections,
  onToggleCollection,
  selectedAromas,
  onToggleAroma,
  selectedColors,
  onToggleColor,
  personalizableOnly,
  onTogglePersonalizable,
  selectedSize,
  onSelectSize,
  selectedExtras,
  onToggleExtra,
  searchTerm,
  onSearchChange,
  onClearFilters,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-6 border border-brand-sand/70 p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Filtros</p>
        <button
          type="button"
          onClick={onClearFilters}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown underline"
        >
          Limpiar
        </button>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Buscar</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Busca por nombre o aroma"
          className="mt-3 w-full border border-brand-sand/70 bg-transparent px-3 py-2 text-sm text-brand-charcoal focus:border-brand-brown focus:outline-none"
        />
      </label>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Colección</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {collections.map((collection) => {
            const isActive = selectedCollections.includes(collection.slug);
            return (
              <button
                key={collection.slug}
                type="button"
                onClick={() => onToggleCollection(collection.slug)}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-brand-brown bg-brand-brown text-brand-cream"
                    : "border-brand-brown/40 text-brand-brown/80 hover:border-brand-brown"
                }`}
              >
                {collection.title}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Aromas</p>
        <div className="mt-3 grid gap-2 text-sm text-brand-charcoal/80">
          {aromaOptions.map((aroma) => (
            <label key={aroma} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedAromas.includes(aroma)}
                onChange={() => onToggleAroma(aroma)}
                className="border-brand-brown/50"
              />
              <span>{aroma}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Colores</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {colorOptions.map((color) => {
            const isActive = selectedColors.includes(color.label);
            return (
              <button
                key={color.label}
                type="button"
                onClick={() => onToggleColor(color.label)}
                className={`flex items-center justify-center rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive ? "ring-2 ring-brand-brown/70" : ""
                }`}
                style={{
                  backgroundColor: color.hex,
                  color: color.label === "Negro carbón" ? "#f5ede4" : "#2f2723",
                }}
              >
                <span className="min-w-[3.5rem] text-center">{color.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Personalizable</p>
        <label className="mt-3 flex items-center gap-2 text-sm text-brand-charcoal/80">
          <input
            type="checkbox"
            checked={personalizableOnly}
            onChange={onTogglePersonalizable}
            className="border-brand-brown/50"
          />
          <span>Mostrar solo personalizables</span>
        </label>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Tamaños</p>
        <div className="mt-3 grid gap-2 text-sm text-brand-charcoal/80">
          {sizeOptions.map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="radio"
                name="size"
                checked={selectedSize === size}
                onChange={() => onSelectSize(size)}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Extras</p>
        <div className="mt-3 grid gap-2 text-sm text-brand-charcoal/80">
          {extraOptions.map((extra) => (
            <label key={extra.key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedExtras.includes(extra.label)}
                onChange={() => onToggleExtra(extra.label)}
                className="border-brand-brown/50"
              />
              <span>{extra.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
