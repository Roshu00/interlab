import Image from "next/image";
import React from "react";

const items = [
  {
    title: "Tačnost i pouzdanost",
    description:
      "Rezultati na koje se možete osloniti pri donošenju važnih odluka.",
    icon: "/accuracy.svg",
  },
  {
    title: "Praktična rešenja",
    description: "Ne samo analiza — već konkretne preporuke za unapređenje.",
    icon: "/world.svg",
  },
  {
    title: "Stručna podrška",
    description: "Direktna komunikacija sa inženjerima i ekspertima.",
    icon: "/person.svg",
  },
  {
    title: "Brzina i efikasnost",
    description: "Kratki rokovi bez kompromisa po pitanju kvaliteta.",
    icon: "/speed.svg",
  },
];

export const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col mt-32">
      <h2 className="font-crimson-text text-7xl">O Nama</h2>
      <p className="text-2xl mt-16 text-gray-text">
        InterLab QCM je specijalizovan za kontrolu i ispitivanje materijala u
        građevinskoj i industrijskoj primeni. <br /> Pomažemo kompanijama da
        ispune zakonske i tehničke standarde — brzo, precizno i pouzdano.
      </p>
      <div className="grid grid-cols-4 gap-4 my-16">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
      <Image
        src="about-us.png"
        alt="About Us"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
    </section>
  );
};

const Item = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col border-t py-10 border-border-color">
      <Image src={icon} alt={title} width={24} height={24} />
      <div>
        <h3 className="font-crimson-text text-xl mt-5">{title}</h3>
        <p className="text-gray-text text-xl mt-5">{description}</p>
      </div>
    </div>
  );
};
