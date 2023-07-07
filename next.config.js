/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/documentation/quick-start",
        destination: "/docs/react/installation",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/react/button",
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
