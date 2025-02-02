import { Technology } from "../components/TechStack";

export type Work = {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  techStack: Technology[];
  location: string;
  tasks: string[];
};

export const allWork: Work[] = [
  {
    role: "Full Stack Intern",
    organization: "Yardstick",
    startDate: "January 2025",
    endDate: "Current",
    location: "Remote",
    tasks: [
      `Developed an AI-driven workflow automation platform using Next.js, optimizing for scalability, performance, and
        low latency to support a large user base`,
      `Implemented modern web technologies, including React Server Components (RSCs), Suspense-based data
        fetching, and lazy loading, improving SEO and achieving high Lighthouse scores`,
      `Integrated Stripe for secure payments and Prisma for efficient database management, designing a RESTful,
        scalable, and high-performance API`,
    ],
    techStack: ["NextJS", "React", "Prisma"],
  },
  {
    role: "Data Engineering Intern",
    organization: "Anand Chemiceutics",
    startDate: "May 2023",
    endDate: "July 2023",
    location: "Mulund, MH",
    tasks: [
      `Automated data transformation with Python scripts, utilizing Pandas for file conversions and 
        optimizing numerical operations with NumPy, reducing processing time by 75%`,
      `Boosted pipeline efficiency by 10x through the elimination of manual data conversion 
        and integration of automated processes, cutting down human error`,
      `Implemented robust testing methodologies to reduce OCR error rate for scanned documents to below 1%,
        improving accuracy and reliability`,
    ],
    techStack: ["Python", "Pandas", "NumPy"],
  },
  {
    role: "Blockchain Intern",
    organization: "Juppiter AI Labs",
    startDate: "June 2022",
    endDate: "August 2022",
    location: "Remote",
    tasks: [
      `Quickly adapted to PyTEAL (Python smart contract library) to meet tight project deadlines`,
      `Recognized as Employee of the Month for being the only intern to successfully deliver smart contracts and test
        them in Docker containers, greatly contributing to project milestones by emulating a local Algorand node`,
      `Automated smart contract testing using Bash scripts, achieving 90% code coverage and ensuring high reliability`,
    ],
    techStack: ["Python", "Linux", "Docker"],
  },
];
