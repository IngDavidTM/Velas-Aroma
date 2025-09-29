const curatedSets = [
  {
    title: "Alborada",
    description:
      "Fragancias cítricas con flor de naranjo y hierbabuena para recibir la mañana con energía serena.",
    notes: "Mandarina dorada · Flor de naranjo · Hierbabuena",
  },
  {
    title: "Bosque húmedo",
    description:
      "Acordes de pino, cedro y musgo que evocan caminatas en la sierra ecuatoriana.",
    notes: "Cedro andino · Musgo fresco · Pimienta rosa",
  },
  {
    title: "Atardecer en Tumbaco",
    description:
      "Vainilla especiada y maderas cálidas que envuelven tus reuniones vespertinas.",
    notes: "Vainilla chai · Sándalo · Ámbar leve",
  },
  {
    title: "Festival de cacao",
    description:
      "Gourmand sofisticado con cacao fino de aroma, canela y destellos de bergamota.",
    notes: "Cacao nacional · Canela · Bergamota",
  },
];

const careTips = [
  "Recorta la mecha a 5 mm antes de cada encendido para una combustión uniforme.",
  "Deja que la vela forme una piscina completa de cera líquida en el primer uso.",
  "Colócala sobre superficies estables y alejada de corrientes de aire.",
  "Reutiliza el envase con nuestro programa de recarga o para organizar pequeños objetos.",
];

export default function CollectionPage() {
  return (
    <div className="divide-y divide-brand-sand/60">
      <section className="px-4 py-14 sm:px-6 md:px-10">
        <div className="space-y-6 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/70">
            Colección 2025
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.07]">
            Aromas diseñados para vestir tu hogar con calma, equilibrio y carácter.
          </h1>
          <p className="text-base text-brand-brown/85 sm:text-lg">
            Cada vela se vierte manualmente en Quito utilizando cera de soya, mechas de algodón y
            aceites esenciales de origen responsable. Descubre nuestras curadurías permanentes y ediciones
            de temporada.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <header className="mb-10 space-y-4 md:col-span-4 md:mb-0">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Curadurías permanentes</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Selecciona la familia olfativa que acompaña tu ritmo diario.
          </h2>
          <p className="text-sm text-brand-brown/85">
            Puedes combinarlas en sets de tres para crear paisajes aromáticos personalizados.
          </p>
        </header>

        <div className="md:col-span-8">
          <div className="grid gap-6 md:grid-cols-2">
            {curatedSets.map((set) => (
              <article key={set.title} className="flex h-full flex-col border border-brand-sand/70 p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-brand-brown">{set.title}</h3>
                  <p className="text-sm text-brand-charcoal/90">{set.description}</p>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.15em] text-brand-brown/75">
                  {set.notes}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <header className="mb-10 space-y-4 md:col-span-4 md:mb-0">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Cuidado esencial</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">Prolonga la vida de tus velas.</h2>
        </header>
        <div className="space-y-6 md:col-span-8">
          {careTips.map((tip) => (
            <div key={tip} className="border border-brand-sand/70 p-6">
              <p className="text-sm text-brand-charcoal/90">{tip}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
