/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["images.unsplash.com", "nepcha.com"],
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
  },
  async rewrites() {
    return [
      {
        source: "/figma",
        destination:
          "https://material-taillwind-eu19csbi7-ct-tailwind-team.vercel.app/figma",
      },
       {
        source: "/blocks",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks",
      },
      {
        source: "/blocks/:slug*",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
