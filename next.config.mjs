import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: ["unsplash.com"],
  },
  experimental: {},
};

export default withContentlayer(nextConfig);
