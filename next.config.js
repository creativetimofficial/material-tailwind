/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com", "nepcha.com"],
  },
  assetPrefix: isProd
    ? `https://docs-test.material-tailwind.com`
    : undefined,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/react/installation",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
