import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { ImageViewerProvider } from "@/components/ImageViewerContext";
import { ImageViewer } from "@/components/ImageViewer";
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
        <ImageViewerProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollArea className="h-screen min-w-full overflow-y-auto">
              <Navbar />
              <main className="max-w-(--breakpoint-md) mx-auto pt-8 p-4 w-screen">
                {children}
              </main>
            </ScrollArea>
            <SpeedInsights />
          </ThemeProvider>
          <ImageViewer />
        </ImageViewerProvider>
        <Analytics />
      </body>
    </html>
  );
}
