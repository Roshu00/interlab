import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Link href="/">
        <Image src="logo.svg" alt="Interlab" width={170} height={25} />
      </Link>
      <ul className="lg:flex hidden items-center justify-center gap-6 font-dm-sans">
        <a href="#about-us">
          <li className="font-bold ">O Nama</li>
        </a>
        <a href="#services">
          <li className="font-bold">Usluge</li>
        </a>
        <a href="#how">
          <li className="font-bold">Naš Pristup</li>
        </a>
        <a href="#location">
          <li className="font-bold">Lokacija</li>
        </a>
      </ul>
      <a href="tel:+381637130288">
        <button className="lg:flex hidden rounded-full bg-black text-white px-6 h-12 font-bold font-dm-sans text-sm items-center justify-center">
          Kontaktirajte nas
        </button>
      </a>
    </nav>
  );
};
