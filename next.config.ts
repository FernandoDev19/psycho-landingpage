import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Evita el error y sirve las imágenes tal como están
  },
  output: "export"
};

export default nextConfig;
