export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xeebwyrq"
      method="POST"
      className="mt-16 space-y-6"
    >
      <input
        name="nom"
        type="text"
        placeholder="Nom"
        required
        className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#B58A3C]"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#B58A3C]"
      />

      <input
        name="objet"
        type="text"
        placeholder="Objet"
        required
        className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#B58A3C]"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Décrivez votre projet, votre idée de création, une transformation ou une réparation..."
        required
        className="w-full rounded-xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#B58A3C]"
      />

      <button
        type="submit"
        className="rounded-full border border-[#B58A3C] px-8 py-4 transition hover:bg-[#B58A3C] hover:text-white"
      >
        Envoyer la demande
      </button>
    </form>
  );
}