import { Burger, Drawer } from "@mantine/core";
import { useState } from "react";
import NavButtonGroup from "./NavButtonGroup";

export function NavBar() {
  const [opened, setOpened] = useState(false);

  return (<>
    <nav className="hidden gap-2 py-3 md:flex" data-cy="desktop-navbar">
      {/* When a desktop navbar, don't do anything on click, just redirect to link */}
      <NavButtonGroup handleClick={() => {}} />
    </nav>
    <div className="md:hidden">
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="sm"
        position="left"
      >
        <nav className="flex flex-col gap-5" data-cy="nav-drawer">
          {/* When a phone nav-drawer, on click, close the drawer and then redirect */}
          <NavButtonGroup handleClick={() => setOpened(false)} />
        </nav>
      </Drawer>

      <div className="flex w-full justify-center my-1">
        <Burger data-cy="nav-drawer-button" opened={false} onClick={() => setOpened(!opened)} aria-label="Open Navigation"/>
      </div>
    </div>
  </>);
}
  