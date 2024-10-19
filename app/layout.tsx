import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
          <main className="max-w-screen-sm mx-auto pt-8 p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Work", href: "/work" },
  ];

  return (
    <header className="sticky top-0 flex items-center p-2 bg-background/75 backdrop-blur-md max-w-screen-sm mx-auto">
      {links.map(({ href, text }) => (
        <Button key={text} className="font-semibold" variant="link" asChild>
          <Link href={href}>{text}</Link>
        </Button>
      ))}
      <ModeToggle />
    </header>
  );
}
