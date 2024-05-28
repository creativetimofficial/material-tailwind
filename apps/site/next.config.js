/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com", "nepcha.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["next-mdx-remote"],
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
      {
        source: "/docs/react/theme/:slug*",
        destination: "/docs/react/:slug*",
        permanent: true,
      },
      {
        source: "/docs/react/props/:slug*",
        destination: "/docs/react/:slug*",
        permanent: true,
      },
      {
        source: "/docs/react/breadcrumbs",
        destination: "/docs/react/breadcrumb",
        permanent: true,
      },
      {
        source: "/docs/react/img",
        destination: "/docs/react/image",
        permanent: true,
      },
      {
        source: "/docs/react/progress-bar",
        destination: "/docs/react/progress",
        permanent: true,
      },
      {
        source: "/docs/react/radio-button",
        destination: "/docs/react/radio",
        permanent: true,
      },
      {
        source: "/docs/react/plugins/charts",
        destination: "/docs/react/plugins/apexcharts",
        permanent: true,
      },
      {
        source: "/docs/react/carousel",
        destination: "/docs/react/plugins/swiper",
        permanent: true,
      },
      {
        source: "/docs/react/form",
        destination: "/docs/react/plugins/forms",
        permanent: true,
      },
      {
        source: "/docs/react/rating-bar",
        destination: "/docs/react/rating",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/figma",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/figma",
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
