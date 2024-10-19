import { Technology } from "../components/TechStack";

export type Project = {
  name: string;
  repoName: string;
  description: string;
  text: string;
  techStack: Technology[];
  link?: string;
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    name: "MyFit",
    repoName: "MyFit",
    description:
      "Open-source workout tracker inspired by the RP Hypertrophy App.",
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
    featured: true,
  },
  {
    name: "Dev Log (this)",
    repoName: "dev-log",
    description:
      "My minimalistic developer portfolio optimized for loading speed and SEO.",
    text: `Built with Next.js and the Shadcn/ui component library, my developer portfolio 
          emphasizes optimal loading speed and SEO. Utilized React's features like partial 
          prerendering and static parameters to boost performance. Implementing React Server 
          Components (RSCs) allows for minimal client-side JavaScript, ensuring a lightweight 
          and efficient user experience. Additionally, the Suspense API is used for handling 
          asynchronous data fetching, enhancing the loading experience while maintaining a 
          minimal JavaScript load.`,
    techStack: ["TypeScript", "NextJS", "React", "TailwindCSS"],
    link: "https://dev-log-whyash5114.vercel.app",
    featured: true,
  },
  {
    name: "Skill Swap",
    repoName: "skill-swap",
    description: `Social platform where users connect, chat, and exchange skills, 
                  with file sharing.`,
    text: `Skill Swap is a social media platform designed to facilitate skill exchange between 
          users. Each user lists skills they offer and skills they want, allowing others to 
          connect through a built-in connection request system. The platform enables real-time 
          chatting and file sharing, making collaboration seamless. Built using modern technologies 
          like NextJS and React for a dynamic frontend, and Prisma for efficient database management, 
          Skill Swap aims to create a community-driven experience for learning and skill development.`,
    techStack: ["TypeScript", "React", "NextJS", "PostgreSQL", "Prisma"],
    link: "https://skill-swap-ebon.vercel.app",
    featured: true,
  },
  // TODO: add hr-tech and web-streaming-platform
  {
    name: "Python Runtime Comparer",
    repoName: "Python-Runtime-Comparer",
    description:
      "Runtime simulator for sorting algorithms with graph visualizations across input size.",
    text: `This tool compares the runtime of different programs across identical inputs and outputs, and visualizes 
          the runtime over varying input sizes using matplotlib. It uses statistical analysis to identify tests 
          that consistently result in worst or best case scenarios. Additionally, the tool features a user-friendly 
          GUI that allows you to select multiple solver files, input files, and output files for comparison.`,
    techStack: ["Python", "Kivy"],
  },
  {
    name: "Agnel Polytechnic Website",
    repoName: "Agnel-Polytechnic-Vashi",
    description:
      "Created a college website for my diploma college: Agnel Polytechnic.",
    text: `Static website with college info, prerendered for quick CDN delivery with a contact us form.
            Optimized images, hero icons, good web metrics with a focus on accessibility, appropriate contract,
            and speed.`,
    techStack: ["TypeScript", "JavaScript", "Svelte", "TailwindCSS"],
    link: "https://apv.ac.in",
  },
  {
    name: "Cryptocurrencies Handbook",
    description:
      "React and Next.js web app for searching commonly used cryptocurrencies.",
    text: `A web app built with React and Next which allows you to search for commonly used cryptocurrencies 
          and get a simple description along with some tags, a logo, and the website link.`,
    techStack: ["JavaScript", "React", "NextJS", "TailwindCSS"],
    link: "https://next-cryptocurrencies-handbook.vercel.app",
    repoName: "next-cryptocurrencies-handbook",
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
