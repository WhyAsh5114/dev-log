import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
          <DesktopHeader />
          <MobileHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

function DesktopHeader() {
  return (
    <header className="sticky top-0 lg:flex gap-2 items-center p-2 border-b bg-background/75 backdrop-blur-sm hidden">
      <h1 className="font-bold text-xl">Dev-Log</h1>
      <Button className="ml-8" variant="link">
        Home
      </Button>
      <Button variant="link">Projects</Button>
      <Button variant="link">Experience</Button>
      <Button variant="link" className="mr-auto">
        About
      </Button>
      <ModeToggle />
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="sticky top-0 flex lg:hidden gap-2 items-center p-2 border-b bg-background/75 backdrop-blur-sm">
      <h1 className="font-bold text-xl mr-auto">Dev-Log</h1>
      <ModeToggle />
    </header>
  );
}
