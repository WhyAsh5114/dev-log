"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  const links: { text: string; href: string }[] = [
    { text: "Projects", href: "/projects" },
    { text: "Experiences", href: "/experiences" },
    { text: "About", href: "/about" },
  ];

  return links.map(({ href, text }) => (
    <Button
      key={text}
      className={cn(className, {
        "text-muted-foreground": !pathname.startsWith(href),
      })}
      variant="link"
    >
      <Link href={href}>{text}</Link>
    </Button>
  ));
}
