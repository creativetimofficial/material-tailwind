/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
        source: "/blocks/:slug*",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
