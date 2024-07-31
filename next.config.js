/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  transpilePackages: ["@heroicons/react"],
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "nepcha.com",
      "docs.material-tailwind.com",
    ],
  },
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_ROOT_DOCS_URL}` : undefined,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/react/installation",
        permanent: true,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: `${process.env.NEXT_PUBLIC_ROOT_URL}`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
