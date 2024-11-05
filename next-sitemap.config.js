module.exports = {
  siteUrl: "https://www.material-tailwind.com/",
  generateRobotsTxt: false,
  transform: async (config, path) => {
    if (!path.startsWith("/docs")) {
      return;
    }
    if (path.startsWith("/docs")) {
      return {
        loc: path,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.9,
      };
    }
  }
};
