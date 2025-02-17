import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Feed from "rss";

const POSTS_DIR = path.join(process.cwd(), "app/blog/data");

function getPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(POSTS_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.name,
        date: data.date as Date,
        slug: file.replace(/\.mdx$/, ""),
        tags: data.description,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date
}

function generateRSS() {
  const siteUrl = "https://dev-log-whyash5114.vercel.app"; // Replace with your actual domain
  const feed = new Feed({
    title: "WhyAsh5114's blog",
    description: "Latest articles from my blog",
    language: "en",
    feed_url: siteUrl,
    site_url: siteUrl,
  });

  getPosts().forEach((post) => {
    feed.item({
      title: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      description: "",
      date: new Date(post.date),
      categories: post.tags,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
  console.log("✅ RSS feed generated!");
}

generateRSS();
