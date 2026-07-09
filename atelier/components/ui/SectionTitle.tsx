type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-[#B58A3C]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 leading-8 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}