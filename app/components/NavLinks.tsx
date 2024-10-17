"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
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
        underline: pathname.startsWith(href),
      })}
      onClick={onClick}
      variant="link"
      asChild
    >
      <Link href={href}>{text}</Link>
    </Button>
  ));
}
