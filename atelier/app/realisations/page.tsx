import GalleryCard from "@/components/gallery/GalleryCard";

const bagues = [
  {
    image: "/images/ring.jpg",
    title: "Bagues",
    description: "Créations sur mesure, alliances, bague de fiancailles et transformations.",
  },
];

const boucles = [
  {
    image: "/images/earrings.jpg",
    title: "Boucles d'oreilles",
    description: "pendant, clou et autre créations.",
  },
];

const pendentifs = [
  {
    image: "/images/pendant.jpg",
    title: "Pendentifs",
    description: "pendentifs, collier, choker et autres.",
  },
];

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#B58A3C]">
            Réalisations
          </p>

          <h1 className="mt-4 font-serif text-6xl">
            Galerie
          </h1>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-neutral-600">
            Quelques exemples de créations, transformations et restaurations réalisées à l'atelier.
          </p>
        </div>

        <section id="bagues" className="mt-32">
          <h2 className="font-serif text-5xl mb-12">
            Bagues
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bagues.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="boucles" className="mt-32">
          <h2 className="font-serif text-5xl mb-12">
            Boucles d'oreilles
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {boucles.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="pendentifs" className="mt-32">
          <h2 className="font-serif text-5xl mb-12">
            Pendentifs
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pendentifs.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}