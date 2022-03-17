const withMT = require("./packages/material-tailwind-html/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      pink: {
        500: "#ff4444"
      }
    },
    fontFamily: {
      sans: ["Roboto Slab", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
});
