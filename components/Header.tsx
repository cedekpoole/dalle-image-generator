import { FC } from "react";
import Image from "next/image";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="fixed w-full">
      <div className="flex w-5/6 mx-auto justify-between p-5">
        {/* left side */}
        <div className="flex gap-3 items-center ">
          <Image src='/brand-img.svg' width="50" height="64" alt="brand image" />
          <div>AI Image Library</div>
        </div>
        {/* right side */}
        <div className="flex gap-3">
          <div>Portfolio</div>
          <div>|</div>
          <div>GitHub Repo</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
