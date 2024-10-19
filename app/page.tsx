import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyP } from "@/components/ui/typographyP";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import LinkedIn from "~icons/mdi/linkedin";
import TechStack from "./components/TechStack";
import ProjectComponent from "./projects/components/ProjectComponent";
import { allProjects } from "./projects/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <TypographyH1>Hi, I&apos;m WhyAsh5114 👋</TypographyH1>
        <TypographyP>
          I&apos;m a passionate full-stack web developer, who likes to build
          quality open-source web apps for everyone!
        </TypographyP>
        <TypographyP>
          My primary tech stack is TypeScript, React, NextJS, TailwindCSS,
          PostgreSQL, and Prisma. I also dabble in other stuff like Python and
          Svelte.
        </TypographyP>

        <div className="grid sm:grid-cols-2 gap-1.5 my-8">
          <TechStack />
          <Link href="https://github.com/WhyAsh5114">
            <Card>
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
            <Card>
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
        <TypographyH2>Featured</TypographyH2>
        <ProjectComponent headingLevel="h3" project={allProjects[0]} />
      </div>
    </>
  );
}
