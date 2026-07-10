import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Workshop() {
  return (
    <section className="bg-[#F8F5F0] py-32">
      <FadeIn>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        <div className="relative h-[550px] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/workshop.jpg"
            alt="Atelier"
            fill
            className="object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.35em] text-[#B58A3C] text-sm">
            L'atelier
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            Là où naissent les bijoux
          </h2>

          <p className="mt-8 leading-9 text-neutral-600">
            Avec l'ambition de réaliser des pièces uniques d'une qualité irréprochable, chaque étape est réalisée par mes soins.
            De la réalisation du lingot au polissage, je lamine mes plaques et fils, je brase je serti etc...
          </p>
          
          <blockquote className="mt-10 border-l-2 border-[#B58A3C] pl-6 italic leading-8 text-neutral-700">
          « Chaque bijou raconte une histoire.
          Mon rôle est de lui donner une forme qui traversera le temps. »
          </blockquote>

          <Link
          href="/atelier"
          className="mt-10 inline-block rounded-full border border-[#B58A3C] px-8 py-3 transition hover:bg-[#B58A3C] hover:text-white"
          >
          Découvrir l'atelier
          </Link>

        </div>

      </div>
      </FadeIn>
    </section>
  );
}