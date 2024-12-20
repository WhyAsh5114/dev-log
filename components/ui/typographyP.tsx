import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
