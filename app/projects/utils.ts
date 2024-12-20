import fs from "fs";
import matter from "gray-matter";
import { Technology } from "../components/TechStack";

export type ProjectMetadata = {
  name: string;
  repoLink: string;
  description: string;
  techStack: Technology[];
  link?: string;
  featured?: boolean;
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
