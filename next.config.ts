// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Se for Vercel, ignora essa parte (eles já cuidam do build)
  // Se for GitHub Pages, isso habilita exportação estática
  output: "export",

  // Para imagens funcionarem no GitHub Pages
  images: {
    unoptimized: true,
  },

  // Isso resolve o problema do caminho quebrado no GitHub Pages
  basePath: isProd ? "/NIMBUS" : "",
  assetPrefix: isProd ? "/NIMBUS/" : "",

  // Para não quebrar o build por causa do ESLint na Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
