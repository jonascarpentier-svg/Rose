const steps = [
  {
    title: "La rencontre",
    text: "Chaque projet débute par un échange autour de votre histoire, de vos envies et de vos inspirations.",
  },
  {
    title: "La conception",
    text: "Croquis, choix des matériaux et réflexion sur les volumes donnent naissance au futur bijou.",
  },
  {
    title: "La fabrication",
    text: "Chaque étape est réalisée artisanalement à l'atelier dans le respect des savoir-faire traditionnels.",
  },
  {
    title: "La transmission",
    text: "Le bijou est remis à son propriétaire avec l'ambition de traverser le temps.",
  },
];

export default function Timeline() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-8">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#B58A3C]">
            Processus créatif
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            De l'idée au bijou
          </h2>
        </div>

        <div className="mt-20 space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-8 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B58A3C] text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}