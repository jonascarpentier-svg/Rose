"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkColor =
  scrolled || !isHome
    ? "text-[#2B2B2B]"
    : "text-[#F5F2ED]";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
      ? "bg-[#EAE7E1]/92 shadow-lg backdrop-blur-xl"
      : "bg-black/60 backdrop-blur-sm"
      }`}
    >
       <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo + nom */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Les Trésors de la Rose"
            width={90}
            height={90}
            className="h-20 w-auto"
            priority
          />

          <span
            className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${linkColor}`}
          >
            Les Trésors de la Rose
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            Accueil
          </Link>

          <Link
            href="/a-propos"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            À propos
          </Link>

          <Link
            href="/atelier"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            Atelier
          </Link>

          <Link
            href="/realisations"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            Réalisations
          </Link>

          <Link
            href="/contact"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}