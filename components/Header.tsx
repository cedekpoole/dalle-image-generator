import { FC } from "react";
import Image from "next/image";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="fixed w-full">
      <div className="flex w-5/6 mx-auto justify-between">
        {/* left side */}
        <div className="flex">
          <Image src='/favicon.svg' width="64" height="64" alt="brand image" />
          <div>World</div>
        </div>
        {/* right side */}
        <div className="flex">
          <div>Github Repo</div>
          <div>Portfolio</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
