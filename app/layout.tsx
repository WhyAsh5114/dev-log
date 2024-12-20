import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
      <head>
        <meta
          name="google-site-verification"
          content="u_zN6Y2wbUyB1EKRpOAyRuQzAgmwAke2RtY1QFuagz0"
        />
      </head>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="h-screen min-w-full overflow-y-auto">
            <Header />
            <main className="max-w-screen-md mx-auto pt-8 p-4 w-screen">
              {children}
            </main>
          </ScrollArea>
          <SpeedInsights />
        </ThemeProvider>
        <Analytics />
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
    <header className="sticky top-0 flex items-center p-2 bg-background/75 backdrop-blur-md max-w-screen-md mx-auto z-50">
      {links.map(({ href, text }) => (
        <Button key={text} className="font-semibold" variant="link" asChild>
          <Link href={href}>{text}</Link>
        </Button>
      ))}
      <ModeToggle />
    </header>
  );
}
