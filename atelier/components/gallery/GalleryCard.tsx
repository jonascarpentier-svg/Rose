"use client";

import Image from "next/image";
import { useState } from "react";

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute right-8 top-8 text-5xl text-white transition hover:scale-110"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <div
            className="relative h-[90vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}