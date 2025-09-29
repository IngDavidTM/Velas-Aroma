const ritualTracks = [
  {
    title: "Respira profundo",
    description:
      "Un ritual de 10 minutos para extender la exhalación y relajar hombros y cuello.",
    steps: [
      "Enciende la vela elegida y obsérvala durante 30 segundos.",
      "Inhala 4 tiempos, sostén 2, exhala 6 tiempos.",
      "Repite afirmaciones suaves centradas en gratitud.",
    ],
  },
  {
    title: "Creatividad consciente",
    description:
      "Secuencia corta para activar ideas antes de iniciar tu jornada de trabajo.",
    steps: [
      "Ventila el espacio y enciende la vela de cítricos o hierbas.",
      "Escribe tres intenciones claras en tu cuaderno.",
      "Dedica 5 minutos a bosquejar o idear sin filtros.",
    ],
  },
  {
    title: "Cierre del día",
    description:
      "Integra respiraciones, journaling y una infusión caliente para descansar mejor.",
    steps: [
      "Apaga pantallas 20 minutos antes del ritual.",
      "Enciende la vela de notas cálidas y escribe un agradecimiento.",
      "Realiza estiramientos suaves enfocando la atención en el aroma.",
    ],
  },
];

const playlists = [
  {
    label: "Amanecer suave",
    mood: "Ambient, piano y sonidos de bosque para despertar con calma.",
  },
  {
    label: "Enfoque profundo",
    mood: "Instrumental downtempo con ritmos sutiles para concentrarte.",
  },
  {
    label: "Noche cálida",
    mood: "Bossa nova y jazz lento para acompañar cenas íntimas.",
  },
];

export default function RitualsPage() {
  return (
    <div className="divide-y divide-brand-sand/60">
      <section className="px-4 py-14 sm:px-6 md:px-10">
        <div className="space-y-6 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/70">
            Rituales Velas & Aroma
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.07]">
            Diseñamos experiencias sensoriales para acompañar cada capítulo del día.
          </h1>
          <p className="text-base text-brand-brown/85 sm:text-lg">
            Combina respiraciones, música y afirmaciones con tus velas favoritas. Estos rituales son una guía
            que puedes adaptar según tu ritmo personal.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <header className="mb-10 space-y-4 md:col-span-4 md:mb-0">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Guías paso a paso</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">Incorpora estos rituales a tu rutina semanal.</h2>
        </header>
        <div className="space-y-8 md:col-span-8">
          {ritualTracks.map((track) => (
            <article key={track.title} className="border border-brand-sand/70 p-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-brand-brown">{track.title}</h3>
                <p className="text-sm text-brand-charcoal/90">{track.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-brand-charcoal/90">
                {track.steps.map((step) => (
                  <li key={step} className="border-t border-brand-sand/60 pt-3 first:border-t-0 first:pt-0">
                    {step}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <header className="mb-10 space-y-4 md:col-span-4 md:mb-0">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-brown/70">Playlists compañeras</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">Sonidos que armonizan con tus velas.</h2>
        </header>
        <div className="space-y-6 md:col-span-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {playlists.map((playlist) => (
            <div key={playlist.label} className="border border-brand-sand/70 p-6">
              <h3 className="text-base font-semibold text-brand-brown">{playlist.label}</h3>
              <p className="mt-3 text-sm text-brand-charcoal/90">{playlist.mood}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
