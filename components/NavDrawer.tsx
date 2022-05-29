import { useState } from "react";
import { Burger, Drawer } from "@mantine/core";
import NavButton from "./NavButton";

export default function NavDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="sm"
        position="left"
      >
        <div className="flex flex-col gap-5">
          <NavButton link="/">Home</NavButton>
          <NavButton link="/">Blog</NavButton>
          <NavButton link="/">Journal</NavButton>
          <NavButton link="/">Projects</NavButton>
          <NavButton link="/">About</NavButton>
        </div>
      </Drawer>

      <div className="flex w-full justify-center mt-6">
        <Burger opened={false} onClick={() => setOpened(!opened)} aria-label="Open Navigation"/>
      </div>
    </div>
  );
}