import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center lg:mt-32 mt-16 px-4">
      <h1 className="font-crimson-text lg:text-8xl text-3xl text-center lg:mb-16 mb-8">
        Kvalitet koji možete dokazati
      </h1>
      <p className="text-center lg:text-2xl text-lg">
        Ispitivanje, kontrola i sertifikacija materijala za građevinu i
        industriju — precizno, pouzdano i u <br /> skladu sa standardima.
      </p>
      <Image
        src="hero.png"
        alt="Hero Image"
        width={1000}
        height={1000}
        className="mt-16 w-full h-auto lg:block hidden"
      />
      <Image
        src="mobile-hero.png"
        alt="Hero Image"
        width={1000}
        height={400}
        className="mt-8 w-full h-auto lg:hidden block"
      />
    </section>
  );
};
