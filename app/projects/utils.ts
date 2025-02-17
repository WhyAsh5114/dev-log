import fs from "fs";
import matter from "gray-matter";
import { Technology } from "../components/TechStack";

export type ProjectMetadata = {
  displayName: string;
  name: string;
  repoLink: string;
  description: string;
  techStack: Technology[];
  link?: string;
  featured?: boolean;
  hackathon?: {
    name: string;
    collegeName: string;
    hackathonWebsite: string;
    location: string;
    placed: string | null;
    duration: 24;
  };
};

export function getProjects() {
  const dir = "app/projects/data";

  const projectFiles = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"));

  return projectFiles.map((filename) => {
    const raw = fs.readFileSync(`${dir}/${filename}`, "utf-8");
    const { data, content } = matter(raw);
    const metadata = data as ProjectMetadata;
    return { metadata, content };
  });
}
