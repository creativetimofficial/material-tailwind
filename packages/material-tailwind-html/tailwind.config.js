const withMT = require("./utils/withMT");

module.exports = withMT({
  content: [],
  safelist: [{ pattern: /./ }],
  theme: {
    extend: {},
  },
  plugins: [],
});
