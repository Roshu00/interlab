import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-32">
      <h1 className="font-crimson-text text-8xl mb-16">
        Kvalitet koji možete dokazati
      </h1>
      <p className="text-center text-2xl">
        Ispitivanje, kontrola i sertifikacija materijala za građevinu i
        industriju — precizno, pouzdano i u <br /> skladu sa standardima.
      </p>
      <Image
        src="/hero.png"
        alt="Hero Image"
        width={1000}
        height={1000}
        className="mt-16 w-full h-auto"
      />
    </section>
  );
};
