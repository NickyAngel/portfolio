import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  { text: "VibeCheck Demo", href: "/vibecheck" },
];
const Navbar = ({ themeVal, setTheme }) => {
  return (
    <header className="fixed flex h-16 min-w-full flex-row items-center  bg-cyan-300">
      <nav className="flex min-h-full min-w-full flex-row  justify-between px-3">
        <div className="flex min-h-full items-end">
          <Link
            href={"/"}
            className=" flex min-h-full items-end pb-1 text-3xl dark:text-white"
          >
            <h1 className="min-h-full text-3xl">Nicholas Angelopoulos</h1>
          </Link>
          <div className="flex min-h-full flex-row px-4 ">
            {MENU_LIST.map((menu) => (
              <div
                className="flex h-16 items-end pb-1 hover:cursor-pointer hover:bg-cyan-700 "
                key={menu.text}
              >
                <NavItem {...menu} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-h-full items-center px-0.5 hover:cursor-pointer">
          <DarkModeToggle themeVal={themeVal} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
