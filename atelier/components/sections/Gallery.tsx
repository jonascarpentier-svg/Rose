import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const creations = [
  {
    image: "/images/ring.jpg",
    title: "Bagues",
    subtitle: "Créations et transformations",
  },
  {
    image: "/images/earrings.jpg",
    title: "Boucles d'oreilles",
    subtitle: "Pièces uniques",
  },
  {
    image: "/images/pendant.jpg",
    title: "Pendentifs",
    subtitle: "Travail artisanal",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-8">

        <SectionTitle
          eyebrow="Réalisations"
          title="Quelques créations"
          description="Ces images seront remplacées progressivement par tes propres réalisations."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {creations.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-neutral-600">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
