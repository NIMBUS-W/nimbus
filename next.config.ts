// next.config.js
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/NIMBUS" : "",
  assetPrefix: isProd ? "/NIMBUS/" : "",
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
