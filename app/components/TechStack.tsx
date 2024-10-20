import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cloneElement } from "react";
import Docker from "~icons/devicon/docker";
import Git from "~icons/devicon/git";
import JavaScript from "~icons/devicon/javascript";
import Linux from "~icons/devicon/linux";
import NextJS from "~icons/devicon/nextjs";
import NodeJS from "~icons/devicon/nodejs";
import PostgreSQL from "~icons/devicon/postgresql";
import Prisma from "~icons/devicon/prisma";
import Python from "~icons/devicon/python";
import React from "~icons/devicon/react";
import Svelte from "~icons/devicon/svelte";
import TailwindCSS from "~icons/devicon/tailwindcss";
import TRPC from "~icons/devicon/trpc";
import TypeScript from "~icons/devicon/typescript";
import Playwright from "~icons/devicon/playwright";
import Pandas from "~icons/devicon/pandas";
import GithubActions from "~icons/devicon/githubactions";
import Kivy from "~icons/file-icons/kivy";
import MongoDB from "~icons/devicon/mongodb";
import ShadcnUI from "~icons/simple-icons/shadcnui";
import DaisyUI from "~icons/logos/daisyui-icon";
import NumPy from "~icons/devicon/numpy";

const allTechnologies = [
  { name: "TypeScript", icon: <TypeScript /> },
  { name: "JavaScript", icon: <JavaScript /> },
  { name: "React", icon: <React /> },
  { name: "NextJS", icon: <NextJS /> },
  { name: "TailwindCSS", icon: <TailwindCSS /> },
  { name: "PostgreSQL", icon: <PostgreSQL /> },
  { name: "Prisma", icon: <Prisma /> },
  { name: "tRPC", icon: <TRPC /> },
  { name: "Playwright", icon: <Playwright /> },
  { name: "GitHub Actions", icon: <GithubActions /> },
  { name: "Svelte", icon: <Svelte /> },
  { name: "MongoDB", icon: <MongoDB /> },
  { name: "ShadcnUI", icon: <ShadcnUI /> },
  { name: "DaisyUI", icon: <DaisyUI /> },
  { name: "Python", icon: <Python /> },
  { name: "NodeJS", icon: <NodeJS /> },
  { name: "Linux", icon: <Linux /> },
  { name: "Docker", icon: <Docker /> },
  { name: "Git", icon: <Git /> },
  { name: "Kivy", icon: <Kivy /> },
  { name: "Pandas", icon: <Pandas /> },
  { name: "NumPy", icon: <NumPy /> },
] as const;

export type Technology = (typeof allTechnologies)[number]["name"];
type PropsType = { techStack?: (typeof allTechnologies)[number]["name"][] };

export default function TechStack({ techStack }: PropsType) {
  const mappedTechnologies = techStack
    ? techStack.map(
        (technologyName) =>
          allTechnologies.find(
            ({ name }) => technologyName === name
          ) as (typeof allTechnologies)[number]
      )
    : allTechnologies;

  return (
    <ScrollArea className="rounded-xl border md:col-span-2 shadow-sm">
      <div className="flex gap-4 p-4 justify-around">
        {mappedTechnologies.map((technology) => {
          return cloneElement(technology.icon, {
            key: technology.name,
            className: "basis-8 shrink-0 h-8 w-8",
          });
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
