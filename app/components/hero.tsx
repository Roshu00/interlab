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
      <div className="flex gap-4 mt-16 flex-col lg:flex-row">
        <div className="p-4 font-dm-sans shadow-custom rounded-3xl flex items-center gap-4 lg:w-[400px] w-full">
          <Image src="badge.svg" alt="badge" width={60} height={60} />
          <div>
            <h3 className=" font-bold lg:text-sm text-lg ">
              Laboratorija - InterLab QCM
            </h3>
            <p className="text-[#151E2399]">Sertifikat o Akreditiaciji</p>
          </div>
        </div>
        <div className="p-4 font-dm-sans shadow-custom rounded-3xl flex items-center gap-4 lg:w-[400px] w-full">
          <Image src="badge.svg" alt="badge" width={60} height={60} />
          <div>
            <h3 className=" font-bold lg:text-sm text-lg ">
              Sertifikaciono telo - InterLab QCM
            </h3>
            <p className="text-[#151E2399]">Sertifikat o Akreditiaciji</p>
          </div>
        </div>
      </div>

      <Image
        src="hero.png"
        alt="Hero Image"
        width={1000}
        height={1000}
        className="mt-16 w-full h-auto lg:block hidden"
      />
      <div className="px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-[#8B8B8B] rounded-2xl -z-1" />
        <Image
          src="mobile-hero.png"
          alt="Hero Image"
          width={1000}
          height={400}
          className="mt-8 w-full h-auto lg:hidden block z-10"
        />
      </div>
    </section>
  );
};
