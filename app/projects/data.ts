import { Technology } from "../components/TechStack";

export type Project = {
  name: string;
  repoName: string;
  description: string;
  text: string;
  techStack: Technology[];
  link?: string;
};

export const allProjects: Project[] = [
  {
    name: "MyFit",
    repoName: "MyFit",
    description:
      "Open-source workout tracker inspired by the RP Hypertrophy App",
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
  {
    name: "DOTA 2 Rampage Finder",
    repoName: "Dota2-Rampage-Finder",
    description: `A Python desktop app using Kivy to find past game IDs with rampages.`,
    text: `A Reddit user wanted to find their last games in which they achieved a rampage (an in game achievement), 
          unfortunately this data wasn't directly available in the game-client, so I tried to help them by 
          creating an app which goes through all games available on the user's account and checks if they
          had any rampages, if they did, the Game ID would get added to a list and be displayed. When making this 
          app I learned a lot about APIs, API keys, rate limiting, filtering and parsing. Python isn't meant for 
          making Desktop apps, but there is a decent framework: Kivy, which served my use case for this small project.`,
    techStack: ["Python", "Kivy"],
  },
];
