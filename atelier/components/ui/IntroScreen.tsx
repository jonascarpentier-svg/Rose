"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center intro-fade intro-background">
      <Image
        src="/logo.png"
        alt="Les Trésors de la Rose"
        width={500}
        height={500}
        priority
        className="intro-logo h-auto w-[300px] md:w-[450px]"
      />
    </div>
  );
}