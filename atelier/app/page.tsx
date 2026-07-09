import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Workshop from "@/components/sections/Workshop";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import Categories from "@/components/sections/Categories";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Workshop />
        <Gallery />
        <Categories />
        <CTA />
    </>
  );
}