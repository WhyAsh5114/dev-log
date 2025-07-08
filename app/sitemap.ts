import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";
import matter from "gray-matter";

export const dynamic = "force-static";

const getLastModified = (relativePath: string) => {
  const filePath = path.join(process.cwd(), relativePath);
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date();
  }
};

const PROJECTS_DIR = path.join(process.cwd(), "app/projects/data");
const POSTS_DIR = path.join(process.cwd(), "app/blog/data");
const BASE_URL = "https://dev-log-whyash5114.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapArray: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: getLastModified("app/page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: getLastModified("app/projects/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: getLastModified("app/work/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: getLastModified("app/blog/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/timeline`,
      lastModified: getLastModified("app/timeline/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hackathons`,
      lastModified: getLastModified("app/hackathons/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(POSTS_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        url: `${BASE_URL}/blog/${data.name}`,
        lastModified: fs.statSync(filePath).mtime,
        changeFrequency: "yearly",
        priority: 0.7,
      };
    });

  const projectPages: MetadataRoute.Sitemap = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(PROJECTS_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        url: `${BASE_URL}/projects/${data.name}`,
        lastModified: fs.statSync(filePath).mtime,
        slug: file.replace(/\.mdx$/, ""),
        tags: data.description,
        priority: 0.8,
      };
    });

  const hackathonPages: MetadataRoute.Sitemap = fs
    .readdirSync(path.join(process.cwd(), "app/hackathons/data"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(process.cwd(), "app/hackathons/data", file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        url: `${BASE_URL}/hackathons/${data.name}`,
        lastModified: fs.statSync(filePath).mtime,
        changeFrequency: "yearly",
        priority: 0.6,
      };
    });

  return [...sitemapArray, ...blogPosts, ...projectPages, ...hackathonPages];
}
