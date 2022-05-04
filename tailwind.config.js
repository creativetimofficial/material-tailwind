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
    extend: {
      animation: {
        slide_input: "slide 8s ease-in-out infinite",
        slide_card: "slide 20s ease-in-out infinite",
        slide_avatars: "slide 11s ease-in-out infinite",
        slide_button: "slide 7s ease-in-out infinite",
        slide_chip: "slide 18s ease-in-out infinite",
        slide_toggle: "slide 10s ease-in-out infinite"
      },
      keyframes: {
        slide: {
          from: {
            transform: "translate(50px, 0px)"
          },
          "65%": {
            transform: "translate(0, 0)"
          },
          to: {
            transform: "translate(50px, -0px)"
          }
        }
      }
    }
  },
  plugins: []
});
