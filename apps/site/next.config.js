/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["next-mdx-remote"],
  assetPrefix: process.env.NEXT_PUBLIC_SITE_URL,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/docs/react/installation",
  //       permanent: true,
  //     },
  //     {
  //       source: "/documentation/quick-start",
  //       destination: "/docs/react/installation",
  //       permanent: true,
  //     },
  //     {
  //       source: "/components",
  //       destination: "/docs/react/button",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/theme/:slug*",
  //       destination: "/docs/react/:slug*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/props/:slug*",
  //       destination: "/docs/react/:slug*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/breadcrumbs",
  //       destination: "/docs/react/breadcrumb",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/img",
  //       destination: "/docs/react/image",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/progress-bar",
  //       destination: "/docs/react/progress",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/radio-button",
  //       destination: "/docs/react/radio",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/plugins/charts",
  //       destination: "/docs/react/plugins/apexcharts",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/carousel",
  //       destination: "/docs/react/plugins/swiper",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/form",
  //       destination: "/docs/react/plugins/forms",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/react/rating-bar",
  //       destination: "/docs/react/rating",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
