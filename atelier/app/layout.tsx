import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Les Trésors de la Rose | Joaillerie artisanale",
  description:
    "Création sur mesure, transformation et réparation de bijoux artisanaux. Les Trésors de la Rose, atelier de joaillerie indépendant.",
  keywords: [
  "joaillerie",
  "joaillier",
  "bijou sur mesure",
  "création de bijoux",
  "transformation de bijoux",
  "réparation de bijoux",
  "artisan joaillier",
],
openGraph: {
  title: "Les Trésors de la Rose",
  description:
    "Création sur mesure, transformation et réparation de bijoux artisanaux.",
  type: "website",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col">
  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}
