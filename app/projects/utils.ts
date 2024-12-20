import fs from "fs";
import matter from "gray-matter";

export function getProjects() {
  const dir = "app/projects/data";

  const projectFiles = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"));

  return projectFiles.map((filename) => {
    const raw = fs.readFileSync(`${dir}/${filename}`, "utf-8");
    const { data: metadata, content } = matter(raw);
    return { metadata, content };
  });
}
