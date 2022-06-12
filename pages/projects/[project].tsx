import path from "path";
import fs from "fs";

import Carousel from "../../components/projectComponents/Carousel";
import ProjectHeader from "../../components/projectComponents/ProjectHeader";
import TechStack from "../../components/projectComponents/TechStack";

import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useMemo, useState } from "react";
import { NavBar } from "../../components/navigation/NavBar";
import { GroupedTransition } from "@mantine/core";

const components = {
  Carousel,
  ProjectHeader,
  TechStack,
  h1: (props: any) => (
    <h2
      className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      {...props}
    />
  ),
  p: (props: any) => <p className="text-sm md:text-base" {...props} />,
};

export default function Project({ project }: { project: string }) {
  const ProjectComponent = useMemo(() => getMDXComponent(project), [project]);

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
            id="projects"
            style={Object.assign(
              {
                backgroundImage: `url('/layered-peaks-haikei.svg')`,
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
              <ProjectComponent components={components} />
            </div>
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const dir = path.resolve("./data/projects");
  const projects = fs.readdirSync(dir).map((file) => {
    return { params: { project: file } };
  });

  return {
    paths: projects,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || params === null) {
    return { notFound: true };
  }

  const project = (
    await bundleMDX({
      file: path.join(`data/projects/${params.project}`),
      cwd: process.cwd(),
    })
  ).code;
  return { props: { project } };
};
