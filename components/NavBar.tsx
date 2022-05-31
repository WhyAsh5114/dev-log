import { Burger, Drawer } from "@mantine/core";
import { useState } from "react";
import NavButtonGroup from "./NavButtonGroup";

export function NavBar() {
  const [opened, setOpened] = useState(false);

  return (<>
    <nav className="hidden gap-2 py-3 md:flex" data-cy="desktop-navbar">
      <NavButtonGroup />
    </nav>
    <div className="md:hidden">
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="sm"
        position="left"
      >
        <nav className="flex flex-col gap-5">
          <NavButtonGroup />
        </nav>
      </Drawer>

      <div className="flex w-full justify-center my-1">
        <Burger opened={false} onClick={() => setOpened(!opened)} aria-label="Open Navigation"/>
      </div>
    </div>
  </>);
}
  