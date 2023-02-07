import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function DarkModeToggle({ themeVal, setTheme }) {
  const [mode, setMode] = useState(themeVal);

  let handleClick = () => {
    themeVal = localStorage.getItem("theme");
    if (themeVal) {
      localStorage.setItem("theme", themeVal === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setTheme(themeVal === "dark" ? "light" : "dark");
    setMode(themeVal === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    console.log(localStorage.theme);
    if (localStorage.theme === undefined) localStorage.setItem("theme", "dark");
    setMode(localStorage.theme);
  }, []);

  return (
    <div className="rounded-md bg-red-300 p-1.5 " onClick={handleClick}>
      {mode === "dark" ? (
        <IconContext.Provider value={{ color: "black", size: "2rem" }}>
          <BsFillSunFill />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
          <BsFillMoonFill />
        </IconContext.Provider>
      )}
    </div>
  );
}
