import React from "react";

const items = [
  "Analiza \n Zahteva",
  "Ispitivanje i \n Kontrola",
  "IzveIzveštaj i \n Preporukeštaj",
  "Sertifikacija i \n Podrškaacija",
];
export const Work = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col mt-32">
      <h2 className="font-crimson-text text-7xl">Kako radimo?</h2>
      <div className="grid grid-cols-4 gap-4 mt-16 w-full">
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
      <h2 className="font-crimson-text text-7xl font-dm-sans tracking-[-10%]">
        0{index + 1}
      </h2>
      <h3 className="font-dm-sans text-4xl font-bold whitespace-pre-line tracking-[-5%]">
        {item}
      </h3>
    </div>
  );
};
