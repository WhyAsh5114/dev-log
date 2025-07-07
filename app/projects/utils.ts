import fs from "fs";
import matter from "gray-matter";
import { Technology } from "../components/TechStack";
import { getHackathonByName } from "../hackathons/utils";

export type ProjectMetadata = {
  displayName: string;
  name: string;
  repoLink: string;
  description: string;
  techStack: Technology[];
  link?: string;
  featured?: boolean;
  hackathonName?: string;
};

export type HackathonBasicMetadata = {
  displayName: string;
  name: string;
  collegeName: string;
  hackathonWebsite: string;
  location: string;
  placed: string | null;
  duration: number;
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

export function getProjectByName(name: string) {
  const projects = getProjects();
  return projects.find((project) => project.metadata.name === name);
}

export function getProjectHackathonInfo(metadata: ProjectMetadata) {
  if (metadata.hackathonName) {
    const hackathon = getHackathonByName(metadata.hackathonName);
    if (hackathon) {
      return {
        name: hackathon.metadata.name,
        displayName: hackathon.metadata.displayName,
        collegeName: hackathon.metadata.collegeName,
        hackathonWebsite: hackathon.metadata.hackathonWebsite,
        location: hackathon.metadata.location,
        placed: hackathon.metadata.placed,
        duration: hackathon.metadata.duration,
      };
    }
  }

  return null;
}
