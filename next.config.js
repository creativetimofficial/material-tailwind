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
        destination: "https://material-taillwind-pro-bxhm.vercel.app/:path*",
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
