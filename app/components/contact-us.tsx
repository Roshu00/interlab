import React from "react";

export const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4 lg:min-h-[500px] items-center justify-center border-t border-border-color">
      <h1 className="font-crimson-text lg:text-7xl text-3xl mt-16 lg:mt-0">
        Treba Vam Pouzdan
        <br /> Partner za Kvalitet?
      </h1>
      <p className="text-gray-text lg:text-2xl text-lg lg:mt-16 mt-8">
        Pošaljite upit i dobićete odgovor u roku od 24h.
      </p>
      <button className="rounded-full bg-black text-white px-6 h-12 font-bold font-dm-sans text-sm lg:mt-16 mt-8">
        Kontaktirajte nas
      </button>
    </section>
  );
};
