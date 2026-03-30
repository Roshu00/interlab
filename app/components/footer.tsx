import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col mt-32 min-h-[200px] border-t border-border-color justify-center gap-4">
      <div className="flex justify-between items-center">
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
      <p className="font-dm-sans">Lokacija: Marka Lainovica 41, Zemun</p>
      <p className="font-dm-sans font-bold">
        <b>Kontakt telefon: +381 65 544 654</b>
      </p>
      <p className="font-roboto-mono tracking-[-1%] text-sm">
        © 2026 InterLab QMC | Sva prava zadržana {new Date().getFullYear()}
      </p>
    </footer>
  );
};
