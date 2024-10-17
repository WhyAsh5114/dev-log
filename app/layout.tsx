import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
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
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLinks from "./components/NavLinks";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dev Log",
  description: "WhyAsh5114's dev log",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          inter.className,
          "min-h-screen min-w-full overflow-y-auto overflow-x-hidden"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 flex gap-2 items-center p-2 border-b bg-background/75 backdrop-blur-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Dev-Log</SheetTitle>
            <SheetDescription>WhyAsh5114&apos;s dev log</SheetDescription>
          </SheetHeader>
          <Separator className="my-2" />
          <div className="grid">
            <NavLinks className="justify-start" />
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="font-bold text-xl px-4">
        <Link href="/">Dev-Log</Link>
      </h1>
      <div className={"hidden lg:flex gap-1"}>
        <NavLinks />
      </div>
      <ModeToggle />
    </header>
  );
}
