import Image from "next/image";
import React from "react";

export const How = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col mt-32 items-center justify-center text-center">
      <h2 className="font-crimson-text text-7xl">Naš Pristup</h2>
      <p className="text-lg mt-16 text-gray-text font-dm-sans">
        Ne posmatramo kvalitet kao formalnost, već kao ključni faktor sigurnosti
        i dugoročne održivosti. <br /> Naš pristup kombinuje tehničku preciznost
        i praktičnu primenu — kako biste dobili rezultate koji imaju stvarnu
        vrednost.
      </p>
      <Image
        src="/table.png"
        alt="How"
        width={1000}
        height={1000}
        className="w-full h-auto mt-16"
      />
      <div className="grid grid-cols-2 gap-4 mt-16 w-full">
        <Image
          src="/industry.png"
          alt="How"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className="text-3xl text-left flex items-center justify-center ml-10">
          “U industriji gde greške mogu imati ozbiljne posledice, preciznost i
          pouzdanost nisu opcija - već standard.
          <br /> <br /> Naš cilj je da obezbedimo rezultate na koje se možete
          osloniti, uz jasne preporuke i potpunu transparentnost procesa.”
          <br /> <br /> <br />
          InterLab QCM
        </div>
      </div>
    </section>
  );
};
