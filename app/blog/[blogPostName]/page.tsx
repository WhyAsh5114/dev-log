import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import rehypeStarryNight from "rehype-starry-night";
import BlogPostHeader from "../components/BlogPostHeader";

type PropsType = {
  params: Promise<{ blogPostName: string }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;
  const blogPostName = decodeURIComponent(params.blogPostName);

  const blogPost = getBlogPosts().find(
    ({ metadata }) => metadata.name === blogPostName
  );
  if (!blogPost) notFound();

  return (
    <>
      <BlogPostHeader metadata={blogPost.metadata} />
      <article className="prose dark:prose-invert max-w-none prose-img:m-0 my-8">
        <MDXRemote
          source={blogPost.content}
          options={{
            scope: blogPost.metadata,
            mdxOptions: { rehypePlugins: [rehypeStarryNight] },
          }}
        />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const projects = getBlogPosts();

  return projects.map(({ metadata }) => ({
    blogPostName: metadata.name,
  }));
}
