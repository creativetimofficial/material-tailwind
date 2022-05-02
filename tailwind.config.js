const withMT = require("./packages/material-tailwind-react/src/utils/withMT");

module.exports = withMT({
  content: [
    "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/material-tailwind-react/src/theme/components/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pagesComponents/**/*.{js,ts,jsx,tsx}",
    "./react-sections/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
});
