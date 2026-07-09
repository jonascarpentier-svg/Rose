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
    ? "text-[#1F1F1F]"
    : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
  ? "bg-white/95 shadow-md backdrop-blur-md"
  : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo + nom */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Les Trésors de la Rose"
            width={60}
            height={60}
            className="h-14 w-auto"
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
            href="/realisations"
            className={`transition-colors duration-300 hover:text-[#B58A3C] ${linkColor}`}
          >
            Réalisations
          </Link>

          <Link
            href="/contact"
            className={`rounded-full border border-[#B58A3C] px-5 py-2 transition duration-300 hover:bg-[#B58A3C] hover:text-white ${
              scrolled ? "text-[#1F1F1F]" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}