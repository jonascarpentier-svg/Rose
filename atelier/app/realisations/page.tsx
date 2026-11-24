import GalleryCard from "@/components/gallery/GalleryCard";

const bagues = [
  {
    image: "/images/Bague_feuille_rubis.jpg",
    title: "Bagues",
    description: "Bague argent 925 et rubis non traité du mozambique",
  },
    {
    image: "/images/Bague_fleur_amethyst.jpg",
    title: "Bagues",
    description: "Bague argent 925 et améthyste du brésil non traité",
  },
    {
    image: "/images/Bague_fleur_emeraude_diamant.jpg",
    title: "Bagues",
    description: "Bague or 18K (750/1000ème) emeraude du brésil et diamants synthétique",
  },
    {
    image: "/images/Bague_nature_aigue_marine.jpg",
    title: "Bagues",
    description: "Bague argent 925, fil d'or 18K (750/1000ème) aigue-marine et diamants synthétique",
  },
    {
    image: "/images/Bague_nature_amethyste.jpg",
    title: "Bagues",
    description: "Bague argent 925 et améthyste du brésil",
  },
    {
    image: "/images/Bague_nature_peridot.jpg",
    title: "Bagues",
    description: "Bague argent 925, feuilles et sertissure en or 18K (750/1000ème) et péridot",
  },
];

const boucles = [
  {
    image: "/images/Boucle_ambre.jpg",
    title: "Boucles d'oreilles",
    description: "Boucles d'oreilles pendantes argent 925 et perles d'ambre",
  },
];

const pendentifs = [
  {
    image: "/images/Pendentif_emeraudes.jpg",
    title: "Pendentifs",
    description: "pendentif en argent 925, trio d'emeraude poire de Zambie et emeraude rectangle de zambie",
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