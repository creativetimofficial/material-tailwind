const colors = require("tailwindcss/colors");
const withMT = require("./packages/material-tailwind-html/utils/withMT");

module.exports = withMT({
  content: [
    "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/material-tailwind-react/src/theme/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
    "./docs-content/**/*.{js,ts,jsx,tsx}",
    "./documentation/**/*.mdx",
    "./public/material-tailwind-html-v2.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
      },
    },
  },
  plugins: [],
});
