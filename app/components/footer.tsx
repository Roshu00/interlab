import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 lg:min-h-[200px] py-8 border-t border-border-color justify-center gap-4">
      <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-4 px-4">
        <ul className="flex gap-4 font-bold font-dm-sans text-sm">
          <li>
            <Link href="/">O Nama</Link>
          </li>
          <li>
            <Link href="/">Usluge</Link>
          </li>
          <li>
            <Link href="/">Naš Pristup</Link>
          </li>
          <li>
            <Link href="/">Sertifikati</Link>
          </li>
        </ul>
        <button className="rounded-full bg-black text-white px-6 h-12 font-bold font-dm-sans text-sm">
          Kontaktirajte nas
        </button>
      </div>
      <p className="font-dm-sans px-4">Lokacija: Marka Lainovica 41, Zemun</p>
      <p className="font-dm-sans font-bold px-4">
        <b>Kontakt telefon: +381 63 7130288</b>
      </p>
      <p className="font-roboto-mono tracking-[-1%] lg:text-sm text-xs px-4">
        © 2026 InterLab QMC | Sva prava zadržana {new Date().getFullYear()}
      </p>
    </footer>
  );
};
