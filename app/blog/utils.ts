import fs from "fs";
import matter from "gray-matter";

export type BlogPostMetadata = {
  displayName: string;
  name: string;
  date: Date;
  tags: string[];
  description: string;
  category: string
};

export function getBlogPosts() {
  const dir = "app/blog/data";

  const blogFiles = fs.readdirSync(dir).filter((name) => name.endsWith(".mdx"));

  return blogFiles
    .map((filename) => {
      const raw = fs.readFileSync(`${dir}/${filename}`, "utf-8");
      const { data, content } = matter(raw);
      const metadata = data as BlogPostMetadata;
      return { metadata, content };
    })
    .sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
}
