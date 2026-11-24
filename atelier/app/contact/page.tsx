
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] px-8 py-40">
      <div className="mx-auto max-w-4xl">
        <p className="uppercase tracking-[0.35em] text-[#B58A3C]">
          Contact
        </p>

        <h1 className="mt-4 font-serif text-6xl">
          Parlons de votre projet
        </h1>

        <p className="mt-8 leading-8 text-neutral-600">
          Parlons de votre projet, d'une création sur mesure,
          d'une transformation ou d'une réparation.
        </p>

        <ContactForm />

        <p className="mt-6 text-sm italic leading-6 text-neutral-500">
          Les informations transmises via ce formulaire sont utilisées
          uniquement pour répondre à votre demande et assurer le suivi
          de votre projet.
          <br />
          <br />
          Pour en savoir plus sur l'utilisation de vos données personnelles
          et exercer vos droits, consultez notre{" "}
          <Link
            href="/politique-confidentialite"
            className="underline transition-colors hover:text-[#B58A3C]"
          >
            politique de confidentialité
          </Link>.
        </p>
      </div>
    </main>
  );
}
