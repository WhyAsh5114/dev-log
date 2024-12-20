"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Work",
      href: "/work",
    },
    {
      text: "Timeline",
      href: "/timeline",
    },
  ];

  return (
    <header className="sticky top-0 flex items-center p-2 bg-background/75 backdrop-blur-md max-w-screen-md mx-auto z-50">
      {links.map(({ href, text }) => (
        <Button
          key={text}
          className={cn("font-semibold px-2 md:px-4", {
            underline:
              href === "/" ? pathname === "/" : pathname.startsWith(href),
          })}
          variant="link"
          asChild
        >
          <Link href={href}>{text}</Link>
        </Button>
      ))}
      <ModeToggle />
    </header>
  );
}
