import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)}>
      {children}
    </p>
  );
}
