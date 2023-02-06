import { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";

export default function Document() {
  let themeVal = "light";
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") themeVal = "dark";
  });
  return (
    <Html lang="en">
      <Head />
      <body className={themeVal === "dark" ? "dark" : "light"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
