import { TypographyH1 } from "@/components/ui/typographyH1";
import { BlogPostCard } from "./components/BlogPostCard";
import { type BlogPostMetadata, getBlogPosts } from "./utils";
import { TypographyH2 } from "@/components/ui/typographyH2";

export default function Page() {
  const blogPosts = getBlogPosts();
  const groupedPosts = blogPosts.reduce((acc, post) => {
    const category = post.metadata.category ?? "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {} as Record<string, { metadata: BlogPostMetadata; content: string }[]>);

  const sortedCategories = Object.keys(groupedPosts).sort((a, b) => {
    return b.localeCompare(a);
  });

  return (
    <>
      <TypographyH1>Blog</TypographyH1>
      {sortedCategories.map((category) => (
        <div key={category}>
          <TypographyH2 className="mt-6!">{category}</TypographyH2>
          <div className="grid mt-4 md:grid-cols-2 gap-2">
            {groupedPosts[category].map((post) => (
              <BlogPostCard key={post.metadata.name} blogPost={post} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
