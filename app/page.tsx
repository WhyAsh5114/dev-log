import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import LinkedIn from "~icons/mdi/linkedin";

export default function Home() {
  return (
    <>
      <div className={cn("flex flex-col gap-3")}>
        <p className={cn("text-2xl font-extrabold")}>
          Hi, I&apos;m WhyAsh5114 👋
        </p>
        <p className="leading-relaxed">
          I&apos;m a passionate full-stack web developer, who likes to build
          quality open-source web apps for everyone! My primary tech stack is
          TypeScript, React, NextJS, TailwindCSS, PostgreSQL, and Prisma. I also
          dabble in other stuff like Python and Svelte.
        </p>
        <div className="grid sm:grid-cols-2 gap-1.5 my-2">
          <Link href="https://github.com/WhyAsh5114">
            <Card className="bg-muted">
              <CardHeader className="flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>WhyAsh5114</CardDescription>
                </div>
                <GitHub className="w-8 h-8" />
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/whyash5114/">
            <Card className="bg-muted">
              <CardHeader className="flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>whyash5114</CardDescription>
                </div>
                <LinkedIn className="w-8 h-8" />
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
