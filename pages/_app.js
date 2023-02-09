import Navbar from "../components/Navbar";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [themeVal, setTheme] = useState("dark");

  useEffect(() => {
    themeCheck();
  }, [themeVal]);

  const themeCheck = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <>
      <Navbar themeVal={themeVal} setTheme={setTheme} />
      <Component {...pageProps} />
    </>
  );
}
