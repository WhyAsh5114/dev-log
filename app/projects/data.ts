import { Technology } from "../components/TechStack";

export type Project = {
  name: string;
  description: string;
  text: string;
  techStack: Technology[];
  link?: string;
};

export const allProjects: Project[] = [
  {
    name: "MyFit",
    description: "A workout tracking web application",
    text: `A web-based workout tracking application designed to help users track
          their workouts, monitor progression, and optimize their training. The
          app supports detailed logging of reps, load, and RIR across weeks,
          with complex progression formulas built in to help users progressively
          overload their exercises.`,
    techStack: [
      "TypeScript",
      "Svelte",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Playwright",
      "TailwindCSS",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://my-fit-v3.vercel.app",
  },
];
