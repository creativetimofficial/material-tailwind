const withMT = require("./utils/withMT");

module.exports = withMT({
  content: ["./scripts/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
});
