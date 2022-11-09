/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
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
  },
  async rewrites() {
    return [
      {
        source: "/blocks",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks",
      },
    ];
  },
};

module.exports = nextConfig;
