import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function GalleryCard({
  image,
  title,
  description,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <h3 className="font-serif text-3xl">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-neutral-600">
          {description}
        </p>
      </div>
    </article>
  );
}