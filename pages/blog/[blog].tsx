import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";

import { bundleMDX } from "mdx-bundler";
import NavBar from "../../components/navigation/NavBar";
import BlogHeader from "../../components/blogComponents/BlogHeader";
import { useEffect, useMemo, useState } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { GroupedTransition } from "@mantine/core";

const components = {
  h1: (props: any) => (
    <h2
      className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      {...props}
    />
  ),
  p: (props: any) => <p className="text-sm md:text-base" {...props} />,
  BlogHeader
};

export default function Blog({ blog }: { blog: string }) {
  const BlogComponent = useMemo(() => getMDXComponent(blog), [blog]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <GroupedTransition
      mounted={loaded}
      transitions={{
        i: { transition: "fade", duration: 500, timingFunction: "ease-out" },
        p: { transition: "pop", duration: 750, timingFunction: "ease-out" },
      }}
    >
      {(styles) => (
        <div className="flex flex-col h-full">
          <NavBar />
          <div
            className="overflow-none flex-1 flex place-items-center justify-center"
            id="blogs"
            style={Object.assign(
              {
                backgroundImage: `url('/blogs-background.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              },
              styles.i
            )}
          >
            <div
              className="flex h-fit bg-stone-900 rounded-lg flex-col gap-2 p-4 md:p-6 lg:p-8 xl:p-10 ml-auto my-5 w-11/12 mr-3 md:w-5/6 md:mr-5 lg:w-4/5 lg:mr-8 xl:w-3/4 xl:mr-12"
              style={styles.p}
            >
              <BlogComponent components={components} />
            </div>
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const dir = path.resolve("./data/blog");
  const blogs = fs.readdirSync(dir).map((file) => {
    return { params: { blog: file } };
  });

  return {
    paths: blogs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || params === null) {
    return { notFound: true };
  }

  const blog = (
    await bundleMDX({
      file: path.join(`data/blog/${params.blog}`),
      cwd: process.cwd(),
    })
  ).code;
  return { props: { blog } };
};
