"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkColor = "text-[#F8F5F0]";

  return (
    <header
      className="fixed top-0 z-50 w-full bg-black/85 backdrop-blur-md shadow-lg">
    
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
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="text-white md:hidden"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {mobileMenuOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
</button>
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
      {mobileMenuOpen && (
  <div className="bg-black/95 backdrop-blur-md md:hidden">
    <div className="flex flex-col items-center gap-6 py-8">

      <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#B58A3C]">
        Accueil
      </Link>

      <Link href="/a-propos" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#B58A3C]">
        À propos
      </Link>

      <Link href="/atelier" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#B58A3C]">
        Atelier
      </Link>

      <Link href="/realisations" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#B58A3C]">
        Réalisations
      </Link>

      <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#B58A3C]">
        Contact
      </Link>

    </div>
  </div>
)}
    </header>
  );
}