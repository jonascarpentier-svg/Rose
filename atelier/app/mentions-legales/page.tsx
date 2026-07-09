export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-32">
      <h1 className="mb-12 font-serif text-5xl">
        Mentions légales
      </h1>

      <section className="space-y-8 text-neutral-700 leading-8">

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Éditeur du site</h2>

          <p>
            Le présent site est édité par :
          </p>

          <p>
            <strong>Les Trésors de la Rose</strong><br />
            [Prénom NOM]<br />
            Micro-entrepreneur exerçant une activité de joaillerie artisanale.<br />
            SIRET : [XXXXXXXXXXXXXX]<br />
            Adresse : [adresse complète]<br />
            Téléphone : [numéro de téléphone]<br />
            Email : [adresse email professionnelle]
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Directeur de la publication</h2>

          <p>
            Monsieur [Prénom NOM], en qualité de dirigeant de l'entreprise individuelle
            Les Trésors de la Rose.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Hébergement</h2>

          <p>
            Le site est hébergé par :
          </p>

          <p>
            [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]<br />
            Téléphone : [numéro de téléphone]
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Propriété intellectuelle</h2>

          <p>
            L'ensemble des contenus présents sur ce site
            (textes, photographies, illustrations, logos, créations, éléments graphiques,
            vidéos et autres contenus) sont protégés par le droit de la propriété
            intellectuelle.
          </p>

          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation ou exploitation, totale ou partielle, des éléments du site,
            quel que soit le moyen ou le procédé utilisé, est interdite sans
            autorisation écrite préalable de l'éditeur du site.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Responsabilité</h2>

          <p>
            L'éditeur du site s'efforce d'assurer l'exactitude et la mise à jour
            des informations diffusées sur ce site. Toutefois, il ne saurait être
            tenu responsable des omissions, inexactitudes ou carences dans la mise
            à jour des informations, qu'elles soient de son fait ou du fait des
            tiers partenaires qui lui fournissent ces informations.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Liens hypertextes</h2>

          <p>
            Le site peut contenir des liens vers d'autres sites internet.
            L'éditeur ne peut être tenu responsable du contenu de ces sites tiers.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Droit applicable</h2>

          <p>
            Le présent site est soumis au droit français.
            Tout litige relatif à son utilisation sera soumis aux juridictions
            françaises compétentes.
          </p>
        </div>

      </section>
    </main>
  );
}