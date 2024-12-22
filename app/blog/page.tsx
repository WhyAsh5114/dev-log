import { TypographyH1 } from "@/components/ui/typographyH1";
import { BlogPostCard } from "./components/BlogPostCard";
import { getBlogPosts } from "./utils";

export default function Page() {
  const blogPostsMetadata = getBlogPosts();

  return (
    <>
      <TypographyH1>Blog</TypographyH1>
      <div className="grid mt-4 md:grid-cols-2 gap-2">
        {blogPostsMetadata.map((post) => (
          <BlogPostCard key={post.metadata.name} blogPost={post} />
        ))}
      </div>
    </>
  );
}
