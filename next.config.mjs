import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: ["unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default withContentlayer(nextConfig);
