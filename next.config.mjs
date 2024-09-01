import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ifpmcf.s3.amazonaws.com",
      "buffer.com",
      "i.ytimg.com",
      "encrypted-tbn0.gstatic.com", // Add the new domain here
    ],
  },
};
export default withNextIntl(nextConfig);
