import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="sticky w-full z-50 shadow-md bg-dark-col-600 border-b border-dark-col-1000">
      <div className="flex w-5/6 mx-auto justify-between py-5 items-center">
        {/* left side */}
        <div className="flex gap-3 items-center ">
          <Image src='/brand-img.svg' width="50" height="64" alt="brand image" />
          <div className="text-lg">AI Image Gallery</div>
        </div>
        {/* right side */}
        <div className="hidden md:flex gap-3">
          <Link className="hover:underline" href="https://cedekpoole.com" target="_blank">Portfolio</Link>
          <div>|</div>
          <Link className="hover:underline" href="https://github.com/cedekpoole" target="_blank">GitHub Repo</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
