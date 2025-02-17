"use client";

import { useEffect, useRef } from "react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";

export function ConfettiDemo({ text }: { text: string }) {
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    confettiRef.current?.fire({ spread: 90, decay: 0.75 });
  }, []);

  return (
    <div className="relative flex h-[500px] z-10 w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none text-center text-lg font-semibold leading-none">
        {text}
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({ spread: 90, decay: 0.75 });
        }}
      />
    </div>
  );
}
