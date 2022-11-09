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
        source: "/blocks/:path*",
        destination: "https://material-tailwind-pro.vercel.app/blocks/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
