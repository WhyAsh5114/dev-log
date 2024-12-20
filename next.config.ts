import type { NextConfig } from "next";
import Icons from "unplugin-icons/webpack";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: "jsx",
        jsx: "react",
        autoInstall: true,
      })
    );
    return config;
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
