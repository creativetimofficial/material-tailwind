const webpack = require("webpack");
const withImages = require("next-images");
const path = require("path");

module.exports = withImages({
  future: {
    webpack5: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/material-tailwind" : "",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
