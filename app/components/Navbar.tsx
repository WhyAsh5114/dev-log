"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 flex items-center p-2 bg-background/75 backdrop-blur-md max-w-screen-md mx-auto z-50">
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="grid w-fit">
            <LinkButtons className="text-left justify-start" />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <LinkButtons />
      )}
      <ModeToggle />
    </header>
  );
}

function LinkButtons({ className }: { className?: string }) {
  const pathname = usePathname();

  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Work", href: "/work" },
    { text: "Blog", href: "/blog" },
    { text: "Timeline", href: "/timeline" },
  ];

  return links.map(({ href, text }) => (
    <Button
      key={text}
      className={cn("font-semibold px-2 md:px-4", className, {
        underline: href === "/" ? pathname === "/" : pathname.startsWith(href),
      })}
      variant="link"
      asChild
    >
      <Link href={href}>{text}</Link>
    </Button>
  ));
}
