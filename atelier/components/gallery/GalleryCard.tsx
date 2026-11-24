
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  // Fermeture avec la touche Echap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
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

      {/* Affichage plein écran */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Image */}
          <div
            className="relative h-[85vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Bouton fermeture */}
          <button
            type="button"
            aria-label="Fermer la photo"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-4xl leading-none text-white shadow-lg transition hover:scale-110 hover:bg-black"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
