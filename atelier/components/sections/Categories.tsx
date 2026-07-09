import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Bagues",
    image: "/images/ring.jpg",
    href: "/realisations#bagues",
  },
  {
    title: "Boucles d'oreilles",
    image: "/images/earrings.jpg",
    href: "/realisations#boucles",
  },
  {
    title: "Pendentifs",
    image: "/images/pendant.jpg",
    href: "/realisations#pendentifs",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#F8F5F0] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B58A3C]">
            Collections
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            Explorer les réalisations
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-[500px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-4xl text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}