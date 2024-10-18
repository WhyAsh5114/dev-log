"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLinks({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Work", href: "/work" },
  ];

  return links.map(({ href, text }) => (
    <Button
      key={text}
      className={cn(className)}
      onClick={onClick}
      variant="link"
      asChild
    >
      <Link href={href}>{text}</Link>
    </Button>
  ));
}
