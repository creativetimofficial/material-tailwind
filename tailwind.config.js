const colors = require("tailwindcss/colors");
const withMT = require("./packages/material-tailwind-html/utils/withMT");

module.exports = withMT({
  content: [
    "./node_modules/@material-tailwind/react/theme/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
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
