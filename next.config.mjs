/** @type {import('next').NextConfig} */
const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
