import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "VibeCheck Demo", href: "/vibecheck" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="fixed flex h-16 min-w-full flex-row items-center bg-cyan-300">
      <nav className="flex min-h-full flex-row items-end px-3">
        <Link href={"/"} className=" flex min-h-full items-end pb-1 text-3xl">
          <h1 className="min-h-full text-3xl">Nicholas Angelopoulos</h1>
        </Link>
        <div className="flex min-h-full flex-row px-4">
          {MENU_LIST.map((menu, idx) => (
            <div
              className="flex h-16 items-end pb-1 hover:cursor-pointer hover:bg-cyan-700 "
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
