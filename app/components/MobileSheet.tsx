"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function MobileSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Dev-Log</SheetTitle>
          <SheetDescription className="text-left">
            WhyAsh5114&apos;s dev log
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="grid">
          <NavLinks className="justify-start" onClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
