const withMT = require("./packages/material-tailwind-html/utils/withMT");

module.exports = withMT({
  content: [
    "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/material-tailwind-react/src/theme/components/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./documentation/**/*.mdx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
