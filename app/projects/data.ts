import { Technology } from "../components/TechStack";

export type Project = {
  name: string;
  repoLink: string;
  description: string;
  text: string;
  techStack: Technology[];
  link?: string;
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    name: "MyFit",
    repoLink: "https://github.com/WhyAsh5114/MyFit",
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
      "ShadcnUI",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://my-fit-v3.vercel.app",
    featured: true,
  },
  {
    name: "Dev Log (this)",
    repoLink: "https://github.com/WhyAsh5114/dev-log",
    description:
      "My minimalistic developer portfolio optimized for loading speed and SEO.",
    text: `Built with Next.js and the Shadcn/ui component library, my developer portfolio 
          emphasizes optimal loading speed and SEO. Utilized React's features like partial 
          prerendering and static parameters to boost performance. Implementing React Server 
          Components (RSCs) allows for minimal client-side JavaScript, ensuring a lightweight 
          and efficient user experience. Additionally, the Suspense API is used for handling 
          asynchronous data fetching, enhancing the loading experience while maintaining a 
          minimal JavaScript load.`,
    techStack: ["TypeScript", "NextJS", "React", "TailwindCSS", "ShadcnUI"],
    link: "https://dev-log-whyash5114.vercel.app",
    featured: true,
  },
  {
    name: "EcoLyf",
    repoLink: "https://github.com/sundaram123krishnan/EcoLyf",
    description: `Web application designed to track and reduce carbon footprints by monitoring daily activities.`,
    text: `Built in 24-hours at Technovate 2.0.
          Ecolyf is an innovative application created to help users track and reduce their 
          carbon footprints by monitoring daily activities and providing AI-driven 
          suggestions for sustainable living. With features like daily carbon tracking, 
          users can log activities to see their environmental impact, while personalized, 
          AI-based suggestions offer actionable tips to reduce emissions. The app also 
          includes an Eco-Score feature, allowing users to visualize their eco-friendliness 
          progress with a measurable score, along with data visualization tools to track 
          improvements over time. Built on a modern tech stack, Ecolyf utilizes Prisma for 
          database management, PostgreSQL for data storage of user activities and eco-scores, 
          Svelte for a responsive frontend experience, and TypeScript to ensure robust and 
          maintainable code.`,
    techStack: [
      "TypeScript",
      "Svelte",
      "TailwindCSS",
      "ShadcnUI",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://eco-lyf.vercel.app/",
    featured: true,
  },
  {
    name: "Skill Swap",
    repoLink: "https://github.com/WhyAsh5114/skill-swap",
    description: `Social platform where users connect, chat, and exchange skills, 
                  with file sharing.`,
    text: `Skill Swap is a social media platform designed to facilitate skill exchange between 
          users. Each user lists skills they offer and skills they want, allowing others to 
          connect through a built-in connection request system. The platform enables real-time 
          chatting and file sharing, making collaboration seamless. Built using modern technologies 
          like NextJS and React for a dynamic frontend, and Prisma for efficient database management, 
          Skill Swap aims to create a community-driven experience for learning and skill development.`,
    techStack: [
      "TypeScript",
      "React",
      "NextJS",
      "ShadcnUI",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://skill-swap-ebon.vercel.app",
    featured: true,
  },
  {
    name: "HR Tech",
    repoLink: "https://github.com/WhyAsh5114/hr-tech",
    description:
      "Streamline HR tasks like resume filtering, auto-responses with Llama API, action monitoring via GitHub API, and expense management.",
    text: `Built in 24-hours at INNOV8 2.0.
          Welcome to the HR Tech Management System! This project is designed to streamline various 
          HR tasks such as resume filtering, automatic response generation via the Llama API, monitoring 
          actions through the GitHub API, and managing employee expenses. Key features include resume 
          filtering to find top candidates, automated response generation using the Llama API for efficient 
          communication, GitHub API integration for tracking actions within the HR system, and a robust 
          employee expense management module. Built with TypeScript for type safety, TailwindCSS for fast 
          UI development, and Svelte for reactive, efficient user interfaces.`,
    techStack: [
      "TypeScript",
      "JavaScript",
      "Svelte",
      "TailwindCSS",
      "ShadcnUI",
    ],
  },
  {
    name: "TrackMate",
    repoLink: "https://github.com/WhyAsh5114/attendance-tracking-system",
    description:
      "Attendance system utilizing QR codes for seamless tracking of student or attendee presence.",
    text: `Built in 24-hours and won first prize 🥇 at Technothon 2k24.
          The system will automatically generate unique QR codes every second for a duration of 10 seconds. 
          To prevent proxy attendance, the web app will operate offline while scanning these QR codes. 
          Attendance reports will include detailed data such as dates, times, and attendees. The system 
          can be easily integrated with existing student management systems or databases. Security measures 
          will be implemented to prevent fraudulent QR code scans. Additionally, the system is designed to 
          scale efficiently, accommodating large numbers of attendees without compromising performance. The 
          user interface will be intuitive for both administrators and attendees, ensuring smooth attendance 
          tracking. Cross-platform compatibility will be a priority, supporting various web browsers and 
          devices for improved accessibility. Finally, historical attendance data will be maintained for 
          future reference or auditing purposes.`,
    techStack: ["TypeScript", "Svelte", "MongoDB", "TailwindCSS", "DaisyUI"],
    link: "https://attendance-tracking-system-nine.vercel.app/",
  },
  {
    name: "Python Runtime Comparer",
    repoLink: "https://github.com/WhyAsh5114/Python-Runtime-Comparer",
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
    repoLink: "https://github.com/WhyAsh5114/Agnel-Polytechnic-Vashi",
    description:
      "Created a college website for my diploma college: Agnel Polytechnic.",
    text: `Static website with college info, prerendered for quick CDN delivery with a contact us form.
            Optimized images, hero icons, good web metrics with a focus on accessibility, appropriate contract,
            and speed.`,
    techStack: ["TypeScript", "JavaScript", "Svelte", "TailwindCSS", "DaisyUI"],
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
    repoLink: "https://github.com/WhyAsh5114/next-cryptocurrencies-handbook",
  },
  {
    name: "DOTA 2 Rampage Finder",
    repoLink: "https://github.com/WhyAsh5114/Dota2-Rampage-Finder",
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
