import Image from "next/image";
import React from "react";

export const Location = () => {
  return (
    <section
      id="location"
      className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4"
    >
      <h2 className="font-crimson-text lg:text-7xl text-3xl">Lokacija</h2>
      <Image
        src="map.png"
        alt="Location"
        width={1000}
        height={1000}
        className="w-full h-auto rounded-2xl lg:block hidden"
      />
      <Image
        src="mobile-map.png"
        alt="Location"
        width={1000}
        height={1000}
        className="w-full h-auto lg:hidden block rounded-2xl"
      />
    </section>
  );
};
