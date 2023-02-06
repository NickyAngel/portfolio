import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function DarkModeToggle({ themeVal, setTheme }) {
  let theme = "light";
  const [mode, setMode] = useState(theme);

  let handleClick = () => {
    theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setTheme(theme === "dark" ? "light" : "dark");
    setMode(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="rounded-md bg-red-300 p-1.5" onClick={handleClick}>
      {mode === "dark" ? (
        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
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
