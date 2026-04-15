import Image from "next/image";
import React from "react";

const items = [
  {
    title: "Ispitivanje materijala",
    description:
      "Hemijska, mehanička i fizička analiza u skladu sa standardima.",
  },
  {
    title: "Kontrola kvaliteta u gradnji",
    description: "Nadzor i verifikacija kvaliteta u svim fazama projekta.",
  },
  {
    title: "Sertifikacija proizvoda",
    description: "Usklađenost sa domaćim i međunarodnim standardima.",
  },
  {
    title: "Konsalting",
    description: "Optimizacija procesa i uvođenje sistema kvaliteta.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h2 className="font-crimson-text lg:text-7xl text-3xl">
            Naše usluge
          </h2>

          <div className="flex flex-col lg:mt-10 mt-8">
            {items.map((item, index) => (
              <Item key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden bg-black/10 p-10 lg:block hidden">
          <div className="rounded-3xl overflow-hidden min-h-[650px] relative w-full h-full">
            <Image
              src="services.jpg"
              alt="Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Image
          src="services.jpg"
          alt="Services"
          width={1000}
          height={1000}
          className="lg:hidden block object-cover rounded-3xl max-h-[450px]"
        />
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="flex py-5 border-t border-border-color">
      <span className="font-dm-sans font-bold text-lg mr-5 text-gray-text">
        0{index + 1}
      </span>
      <div>
        <h3 className="font-dm-sans font-bold text-lg">{title}</h3>
        <p className="text-gray-text font-dm-sans text-lg">{description}</p>
      </div>
    </div>
  );
};
