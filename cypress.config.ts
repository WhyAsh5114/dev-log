import { defineConfig } from "cypress";
import fs from "fs";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        async "getProjects"() {
          const projects = fs.readdirSync("/data/projects");
          const projectsMetadata: projectMetadata[] = await Promise.all(
            projects.map(async (project) => {
              let data = (await import(`./../../data/projects/${project}`)).metadata;
              data.file_name = project;
              return data;
            })
          );

          return projectsMetadata;
        }
      })
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
