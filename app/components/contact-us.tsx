import React from "react";

export const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col mt-32 min-h-[500px] items-center justify-center border-t border-border-color">
      <h1 className="font-crimson-text text-7xl">
        Treba Vam Pouzdan
        <br /> Partner za Kvalitet?
      </h1>
      <p className="text-gray-text text-2xl mt-16">
        Pošaljite upit i dobićete odgovor u roku od 24h.
      </p>
      <button className="rounded-full bg-black text-white px-6 h-12 font-bold font-dm-sans text-sm mt-16">
        Kontaktirajte nas
      </button>
    </section>
  );
};
