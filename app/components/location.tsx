import Image from "next/image";
import React from "react";

export const Location = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col mt-32">
      <h2 className="font-crimson-text text-7xl">Lokacija</h2>
      <Image
        src="/map.png"
        alt="Location"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
    </section>
  );
};
