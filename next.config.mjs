import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: ["unsplash.com"],
  },
  experimental: {
    serverComponents: true,
    appDir: true,
    serverActions: true, // Enable Server Actions

  },
};

export default withContentlayer(nextConfig);
``;
,