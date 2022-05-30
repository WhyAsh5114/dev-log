import { useState } from "react";
import { Burger, Drawer } from "@mantine/core";
import NavButtonGroup from "./NavButtonGroup";

export default function NavDrawer() {
  const [opened, setOpened] = useState(false);

  return (
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
  );
}