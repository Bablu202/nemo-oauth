import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: ["unsplash.com"],
  },
  experimental: {
    serverComponents: true,
    appDir: true,
  },
};

export default withContentlayer(nextConfig);
