import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1F1F1F] py-28 text-center text-white">

      <div className="mx-auto max-w-3xl px-8">

        <p className="uppercase tracking-[0.35em] text-[#D8B26E] text-sm">
          Votre projet
        </p>

        <h2 className="mt-6 font-serif text-5xl">
          Imaginons ensemble votre futur bijou
        </h2>

        <p className="mt-8 leading-8 text-neutral-300">
          Une création sur mesure commence toujours par une rencontre.
          Racontons ensemble votre histoire.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-block rounded-full border border-[#D8B26E] px-10 py-4 uppercase tracking-widest transition hover:bg-[#D8B26E] hover:text-black"
        >
          Prendre rendez-vous
        </Link>

      </div>

    </section>
  );
}