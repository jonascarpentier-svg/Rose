import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Atelier Les Trésors de la Rose"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center text-white">

        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D8B26E]">
          Joaillerie artisanale
        </p>

        <h1 className="font-serif text-5xl font-light leading-tight md:text-7xl">
          Les Trésors
          <br />
          de la Rose
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-200">
          Création sur mesure, transformation et restauration de bijoux
          dans le respect du savoir-faire artisanal.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row">

          <Link
            href="/realisations"
            className="rounded-full border border-[#D8B26E] px-8 py-4 transition hover:bg-[#D8B26E] hover:text-black"
          >
            Découvrir les créations
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Prendre rendez-vous
          </Link>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-white">
        ↓
      </div>

    </section>
  );
}