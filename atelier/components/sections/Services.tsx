import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "Création sur mesure",
    text: "Chaque bijou est imaginé et réalisé entièrement à la main selon votre histoire et vos envies.",
  },
  {
    title: "Transformation",
    text: "Redonner vie à un bijou ancien en conservant son âme et son histoire familiale.",
  },
  {
    title: "Réparation",
    text: "Restauration et remise en état dans le respect des techniques traditionnelles de joaillerie.",
  },
];

export default function Services() {
  return (
    <section className="relative -mt-16 rounded-t-[4rem] bg-white py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B58A3C]">
            Le savoir-faire
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            Mon métier
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            Chaque pièce est réalisée avec exigence, authenticité et créativité,
            dans le respect des savoir-faire traditionnels de la joaillerie artisanale.
          </p>
        </div>

        <FadeIn>
          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-neutral-200 bg-[#FCFBF9] p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="font-serif text-3xl">
                  {service.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}