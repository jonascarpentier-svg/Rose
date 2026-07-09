import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-neutral-400 transition duration-300 hover:text-[#D8B26E]";

  return (
    <footer className="mt-24 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Présentation */}
          <div>
            <h3 className="font-serif text-3xl text-white">
              Les Trésors de la Rose
            </h3>

            <p className="mt-6 leading-8 text-neutral-400">
              Joaillerie artisanale spécialisée dans la création sur mesure,
              la transformation et la restauration de bijoux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.30em] text-[#B58A3C]">
              Navigation
            </h4>

            <div className="flex flex-col gap-3">
              <Link href="/" className={linkClass}>
                Accueil
              </Link>

              <Link href="/a-propos" className={linkClass}>
                À propos
              </Link>

              <Link href="/realisations" className={linkClass}>
                Réalisations
              </Link>

              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.30em] text-[#B58A3C]">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-neutral-400">
              <p>Création sur mesure</p>
              <p>Transformation de bijoux</p>
              <p>Réparation et restauration</p>
              <p>Travail sur rendez-vous</p>
            </div>
          </div>

          {/* Informations */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.30em] text-[#B58A3C]">
              Informations
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                href="/mentions-legales"
                className={linkClass}
              >
                Mentions légales
              </Link>

              <Link
                href="/politique-confidentialite"
                className={linkClass}
              >
                Politique de confidentialité
              </Link>

              <Link
                href="/contact"
                className={linkClass}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-neutral-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>
            © {currentYear} Les Trésors de la Rose — Tous droits réservés.
          </p>

          <p>
            Joaillerie artisanale • France
          </p>
        </div>
      </div>
    </footer>
  );
}