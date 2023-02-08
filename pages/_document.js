import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en" className="!scroll-smooth">
      <Head />
      <body className="bg-sky-50 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
