import Image from "next/image";
import React from "react";

export const How = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4 items-center justify-center">
      <h2 className="font-crimson-text lg:text-7xl text-3xl text-center">
        Naš Pristup
      </h2>
      <p className="lg:text-2xl text-lg lg:mt-16 mt-8 text-gray-text font-dm-sans text-center">
        Ne posmatramo kvalitet kao formalnost, već kao ključni faktor sigurnosti
        i dugoročne održivosti. <br /> Naš pristup kombinuje tehničku preciznost
        i praktičnu primenu — kako biste dobili rezultate koji imaju stvarnu
        vrednost.
      </p>

      <ComparisonTable />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mt-16 mt-8 w-full">
        <Image
          src="industry.png"
          alt="How"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className="lg:text-3xl text-lg lg:text-left flex items-center justify-center lg:ml-10 ml-0">
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

export const ComparisonTable = () => {
  const rows = [
    "Direktna komunikacija sa stručnjacima i jasno definisan proces",
    "Jasni, interpretirani izveštaji spremni za primenu",
    "Optimizovani procesi i brza isporuka rezultata",
    "Rešavanje konkretnih problema i unapređenje procesa",
    "Prilagođavanje specifičnim zahtevima projekta",
    "Partnerstvo i kontinuirana podrška",
  ];
  const rightRows = [
    "Komunikacija kroz više nivoa, često bez jasnog uvida",
    "Tehnički kompleksni izveštaji bez dodatnog objašnjenja",
    "Duži rokovi zbog rigidnih procedura",
    "Formalno ispunjavanje standarda",
    "Standardizovan pristup bez prilagođavanja",
    "Jednokratna usluga bez daljeg praćenja",
  ];

  return (
    <div className="w-full mx-auto lg:py-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden ">
        {/* LEFT SIDE */}
        <div className="border border-gray-100 rounded-2xl shadow-md">
          <div className="p-6 border-b border-gray-100 text-center font-semibold text-lg border-b font-dm-sans">
            InterLab QCM
          </div>

          {rows.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-3 h-20 px-6 border-b border-gray-100 last:border-b-0"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2513 4.08422L5.2513 11.0842L2.04297 7.87589L2.86547 7.05339L5.2513 9.43339L11.4288 3.26172L12.2513 4.08422Z"
                  fill="#485C11"
                />
              </svg>

              <p className="text-gray-800 text-xs lg:text-sm leading-relaxed font-roboto-mono">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:block hidden">
          <div className="p-6 border-b border-gray-100 text-center font-semibold text-lg border-b border-black-300 font-dm-sans text-gray-text">
            Standardni pristup u industriji
          </div>

          {rightRows.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-3 h-20 px-6 border-b border-gray-100"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.85297 6.99935L11.0846 10.231V11.0827H10.233L7.0013 7.85102L3.76964 11.0827H2.91797V10.231L6.14964 6.99935L2.91797 3.76768V2.91602H3.76964L7.0013 6.14768L10.233 2.91602H11.0846V3.76768L7.85297 6.99935Z"
                  fill="#6F6F6F"
                />
              </svg>

              <span className="text-gray-800 text-xs lg:text-sm leading-relaxed font-roboto-mono">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
