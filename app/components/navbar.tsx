import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Link href="/">
        <Image src="logo.svg" alt="Interlab" width={170} height={25} />
      </Link>
      <ul className="lg:flex hidden items-center justify-center gap-6 font-dm-sans">
        <li className="font-bold ">O Nama</li>
        <li className="font-bold">Usluge</li>
        <li className="font-bold">Naš Pristup</li>
        <li className="font-bold">Sertifikati</li>
        <li className="font-bold">Kontakt</li>
      </ul>
      <button className="lg:flex hidden rounded-full bg-black text-white px-6 h-12 font-bold font-dm-sans text-sm">
        Kontaktirajte nas
      </button>
    </nav>
  );
};
