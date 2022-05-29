import NavButton from "./NavButton";

import React from "react";
export function NavBar({}) {
  return <nav className="flex gap-2 py-3">
      <NavButton link="/">Home</NavButton>
      <NavButton link="/">Blog</NavButton>
      <NavButton link="/">Journal</NavButton>
      <NavButton link="/">Projects</NavButton>
      <NavButton link="/">About</NavButton>
    </nav>;
}
  