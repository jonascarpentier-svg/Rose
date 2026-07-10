import Image from "next/image";

const steps = [
  {
    title: "Le projet",
    image: "/images/projet.jpg",
    text: "Chaque création débute par une rencontre et un échange autour de vos envies, de votre histoire et de vos inspirations. Cette étape permet de définir les lignes directrices du futur bijou et d'imaginer ensemble une pièce unique qui vous ressemble."
  },
  {
    title: "La conception",
    image: "/images/conception.jpg",
    text: "Croquis, recherches de proportions, sélection des matériaux et des pierres : le projet prend progressivement forme. Chaque détail est étudié afin d'assurer l'équilibre esthétique et technique de la création."
  },
  {
    title: "Le lingotage",
    image: "/images/lingotage.jpg",
    text: "L'or ou l'argent est fondu puis coulé afin d'obtenir le métal brut qui servira de base à la fabrication du bijou. Cette étape marque le véritable début du travail de matière."
  },
  {
    title: "Le laminage",
    image: "/images/laminage.jpg",
    text: "Le métal est progressivement étiré et mis à la bonne épaisseur grâce au laminoir et aux filières. Cette opération permet d'obtenir les plaques et les fils nécessaires à la fabrication des différents éléments du bijou."
  },
  {
    title: "La fabrication",
    image: "/images/fabrication.jpg",
    text: "Sciage, ajustage, soudure, mise en forme, limage, emerisage : chaque pièce est entièrement fabriquée à l'atelier selon les techniques traditionnelles de la joaillerie artisanale."
  },
  {
    title: "Le sertissage",
    image: "/images/sertissage.jpg",
    text: "Les pierres sont mises en place avec précision afin d'assurer leur maintien tout en valorisant leur éclat. Cette étape exige patience, rigueur et maîtrise du geste."
  },
  {
    title: "Le polissage",
    image: "/images/polissage.jpg",
    text: "Dernière étape avant la remise du bijou : le polissage révèle la brillance du métal et met en lumière chaque détail de la création."
  }
];

export default function AtelierPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#1F1F1F]">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#B58A3C]">
            Le savoir-faire artisanal
          </p>

          <h1 className="mb-8 font-serif text-5xl md:text-6xl">
            L'atelier
          </h1>

          <p className="text-lg leading-8 text-neutral-600">
            Derrière chaque création se cache un travail minutieux où le geste,
            la matière et le temps occupent une place essentielle. Découvrez
            les différentes étapes qui donnent naissance à un bijou réalisé à
            l'atelier.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={800}
                  height={600}
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="mb-4 uppercase tracking-[0.3em] text-[#B58A3C]">
                  Étape {index + 1}
                </p>

                <h2 className="mb-6 font-serif text-4xl">
                  {step.title}
                </h2>

                <p className="text-lg leading-8 text-neutral-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}