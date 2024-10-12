import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ifpmcf.s3.amazonaws.com",
      "buffer.com",
      "backend.ifpmc.org",
      "i.ytimg.com",
      "www.kptc.com.kw",
      "ifpmc.fra1.digitaloceanspaces.com",
      "encrypted-tbn0.gstatic.com", // Add the new domain here
    ],
  },
};
export default withNextIntl(nextConfig);
