import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'media.istockphoto.com']
  },
  trailingSlash: false
};

export default nextConfig;
