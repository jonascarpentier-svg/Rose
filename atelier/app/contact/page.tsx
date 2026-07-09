import ContactForm from "@/components/sections/ContactForm";
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

      </div>

    </main>
  );
}