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
  hackathonName?: string;
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
    try {
      // Dynamic import to avoid circular dependencies
      const { getHackathonByName } = require("../hackathons/utils");
      const hackathon = getHackathonByName(metadata.hackathonName);
      if (hackathon) {
        // Convert hackathon metadata to legacy format for backward compatibility
        return {
          name: hackathon.metadata.displayName,
          collegeName: hackathon.metadata.collegeName,
          hackathonWebsite: hackathon.metadata.hackathonWebsite,
          location: hackathon.metadata.location,
          placed: hackathon.metadata.placed,
          duration: hackathon.metadata.duration,
        };
      }
    } catch (error) {
      // If hackathon utils are not available, return null
      console.warn(`Could not load hackathon data for: ${metadata.hackathonName}`);
    }
  }

  return null;
}
