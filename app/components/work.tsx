import React from "react";

const items = [
  "Analiza \n Zahteva",
  "Ispitivanje i \n Kontrola",
  "IzveIzveštaj i \n Preporukeštaj",
  "Sertifikacija i \n Podrškaacija",
];
export const Work = () => {
  return (
    <section
      id="work"
      className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4"
    >
      <h2 className="font-crimson-text lg:text-7xl text-3xl">Kako radimo?</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-16 mt-8 w-full">
        {items.map((item, index) => (
          <Item key={item} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const Item = ({ item, index }: { item: string; index: number }) => {
  return (
    <div className="flex flex-col text-left text-[#929292]">
      <h2 className="font-crimson-text lg:text-7xl text-3xl font-dm-sans tracking-[-10%]">
        0{index + 1}
      </h2>
      <h3 className="font-dm-sans lg:text-4xl text-lg whitespace-pre-line tracking-[-5%]">
        {item}
      </h3>
    </div>
  );
};
