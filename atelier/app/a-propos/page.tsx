import Timeline from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5F0] pt-40">

      <section className="mx-auto max-w-6xl px-8">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-[#B58A3C]">
            À propos
          </p>

          <h1 className="mt-4 font-serif text-6xl leading-tight">
            Un artisan au service de vos histoires.
          </h1>

          <p className="mt-10 leading-9 text-neutral-600">
            Chaque pièce est réalisée dans la tradition joaillère du travail à la cheville.
            De l'alliage à la livraison tout est réalisé par mes soins sans intermédiaire. J'ai fais le choix d'un travail nécessitant le temps de la reflexion, la recherche des pierres auprès de fournisseurs de qualité et la production de pièces uniques. 

          </p>

          <blockquote className="mt-12 border-l-2 border-[#B58A3C] pl-6 italic text-xl leading-9 text-neutral-700">
            « Chaque bijou raconte une histoire.
            Mon rôle est de lui donner une forme qui traversera le temps. »
          </blockquote>

        </div>
      </section>

      <Timeline />
<section className="pb-32">
  <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-3">

    <div className="rounded-2xl bg-white p-10 shadow-sm">
      <h3 className="font-serif text-3xl">Exigence</h3>
      <p className="mt-6 leading-8 text-neutral-600">
        Chaque détail compte dans la création d'un bijou destiné à durer.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-10 shadow-sm">
      <h3 className="font-serif text-3xl">Authenticité</h3>
      <p className="mt-6 leading-8 text-neutral-600">
        Préserver le geste artisanal et la relation humaine au cœur du projet.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-10 shadow-sm">
      <h3 className="font-serif text-3xl">Créativité</h3>
      <p className="mt-6 leading-8 text-neutral-600">
        Imaginer des créations uniques adaptées à chaque histoire personnelle.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}