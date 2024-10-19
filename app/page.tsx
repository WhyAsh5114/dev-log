import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import LinkedIn from "~icons/mdi/linkedin";

import JavaScript from "~icons/devicon/javascript";
import NextJS from "~icons/devicon/nextjs";
import NodeJS from "~icons/devicon/nodejs";
import PostgreSQL from "~icons/devicon/postgresql";
import Prisma from "~icons/devicon/prisma";
import Python from "~icons/devicon/python";
import React from "~icons/devicon/react";
import Svelte from "~icons/devicon/svelte";
import TailwindCSS from "~icons/devicon/tailwindcss";
import TypeScript from "~icons/devicon/typescript";
import Linux from "~icons/devicon/linux";
import Docker from "~icons/devicon/docker";
import Git from "~icons/devicon/git";

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
          <ScrollArea className="w-full rounded-xl border sm:col-span-2 shadow-sm">
            <div className="flex gap-4 p-4">
              <TypeScript className="basis-8 h-8 shrink-0 w-8" />
              <JavaScript className="basis-8 h-8 shrink-0 w-8" />
              <React className="basis-8 h-8 shrink-0 w-8" />
              <NextJS className="basis-8 h-8 shrink-0 w-8" />
              <TailwindCSS className="basis-8 h-8 shrink-0 w-8" />
              <PostgreSQL className="basis-8 h-8 shrink-0 w-8" />
              <Prisma className="basis-8 h-8 shrink-0 w-8" />
              <Svelte className="basis-8 h-8 shrink-0 w-8" />
              <Python className="basis-8 h-8 shrink-0 w-8" />
              <NodeJS className="basis-8 h-8 shrink-0 w-8" />
              <Linux className="basis-8 h-8 shrink-0 w-8" />
              <Docker className="basis-8 h-8 shrink-0 w-8" />
              <Git className="basis-8 h-8 shrink-0 w-8" />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
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
        <TypographyH3>MyFit</TypographyH3>
        <ScrollArea className="h-72">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 place-items-center min-w-96">
            <Image
              src="/MicrocycleVolumeDistributionChart.webp"
              alt="Microcycle Volume Distribution Chart"
              width={240}
              height={240}
            />
            <Image
              src="/ViewMesocycle.png"
              alt="View Mesocycle"
              width={240}
              height={480}
              className="row-span-2"
            />
            <Image
              src="/MicrocycleVolumeDistributionChart.webp"
              alt="Microcycle Volume Distribution Chart"
              width={240}
              height={240}
            />
            <Image
              src="/MicrocycleVolumeDistributionChart.webp"
              alt="Microcycle Volume Distribution Chart"
              width={240}
              height={240}
            />
            <Image
              src="/MicrocycleVolumeDistributionChart.webp"
              alt="Microcycle Volume Distribution Chart"
              width={240}
              height={240}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
