import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/#home" },
  { text: "About Me", href: "/#about" },
  { text: "VibeCheck Demo", href: "/#vibecheck" },
  { text: "Contact Me", href: "/#contact" },
];
const Navbar = ({ themeVal, setTheme }) => {
  return (
    <header className="fixed flex h-16 min-w-full flex-row items-center  bg-sky-500 dark:bg-gray-800">
      <nav className="flex min-h-full min-w-full flex-row justify-between px-3">
        <div className="flex min-h-full items-end">
          <Link
            href={"/"}
            className=" flex min-h-full items-end pb-2 text-3xl dark:text-gray-700"
          >
            <h1 className="min-h-full text-3xl dark:text-sky-600">
              Nicholas Angelopoulos
            </h1>
          </Link>
          <div className="flex min-h-full flex-row px-4 ">
            {MENU_LIST.map((menu) => (
              <div
                className="flex h-16 items-end pb-2 hover:cursor-pointer hover:bg-sky-600 "
                key={menu.text}
              >
                <NavItem {...menu} />
              </div>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="ml-1 mt-[1.8rem] mb-1.5 rounded-full border-2 border-gray-800 bg-sky-300 px-2 text-sky-800 hover:cursor-pointer hover:bg-sky-600 dark:border-gray-600 dark:bg-sky-50/0 dark:text-sky-700 dark:hover:bg-gray-400"
            >
              Resume
            </a>
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
