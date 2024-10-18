import { ReactNode } from "react";

export function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
