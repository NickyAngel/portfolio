import React from "react";

export default function DarkModeToggle() {
  let mode = "light";
  return <div>{mode === "dark" ? <div>moon</div> : <div>sun</div>}</div>;
}
