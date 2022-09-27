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
    return {
      beforeFiles: [
        {
          source: "/blocks/:path*",
          destination: "https://material-taillwind-pro-bxhm.vercel.app/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
