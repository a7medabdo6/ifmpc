import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ifpmcf.s3.amazonaws.com",
      "buffer.com",
      "i.ytimg.com",
      "www.kptc.com.kw",
      "encrypted-tbn0.gstatic.com", // Add the new domain here
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};
export default withNextIntl(nextConfig);
