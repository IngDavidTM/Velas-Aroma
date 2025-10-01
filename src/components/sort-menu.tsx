export default function SortMenu() {
  return (
    <div className="flex items-center gap-3 text-sm text-brand-charcoal/80">
      <label htmlFor="sort" className="text-xs uppercase tracking-[0.2em] text-brand-brown/70">
        Ordenar
      </label>
      <select
        id="sort"
        className="border border-brand-sand/70 bg-transparent px-3 py-2 text-sm text-brand-charcoal focus:border-brand-brown focus:outline-none"
      >
        <option value="featured">Destacados</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="new">Más nuevos</option>
      </select>
    </div>
  );
}
