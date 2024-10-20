import { Technology } from "../components/TechStack";

export type Work = {
  role: string;
  organization: string;
  startDate: Date;
  endDate: Date;
  techStack: Technology[];
  location: string;
  tasks: string[];
};

export const allWork: Work[] = [
  {
    role: "Data Engineering Intern",
    organization: "Anand Chemiceutics",
    startDate: new Date(),
    endDate: new Date(),
    location: "Mulund, Maharashtra",
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
    startDate: new Date(),
    endDate: new Date(),
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
