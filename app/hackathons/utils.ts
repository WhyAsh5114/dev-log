import fs from "fs";
import matter from "gray-matter";

export type HackathonMetadata = {
  displayName: string;
  name: string;
  description: string;
  hackathonWebsite: string;
  collegeName: string;
  location: string;
  date: Date;
  duration: number; // in hours
  teamSize: number;
  projectName: string; // references the project that was built
  placed: string | null;
  ratings: {
    food: number;
    swag: number;
    stay: number;
    mentorship: number;
  };
};

export function getHackathons() {
  const dir = "app/hackathons/data";

  if (!fs.existsSync(dir)) {
    return [];
  }

  const hackathonFiles = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"));

  return hackathonFiles.map((filename) => {
    const raw = fs.readFileSync(`${dir}/${filename}`, "utf-8");
    const { data, content } = matter(raw);
    const metadata = data as HackathonMetadata;

    // Convert date string to Date object if needed
    if (typeof metadata.date === "string") {
      metadata.date = new Date(metadata.date);
    }

    return { metadata, content };
  });
}

export function getHackathonByName(name: string) {
  const hackathons = getHackathons();
  return hackathons.find((hackathon) => hackathon.metadata.name === name);
}
