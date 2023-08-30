const { gray, white, blue, green, yellow, red } = require("tailwindcss/colors");

module.exports = {
  content: [
    "./packages/react/src/theme/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: gray[900],
          light: gray[800],
          dark: gray[950],
          content: white,
        },
        secondary: {
          main: gray[100],
          light: gray[50],
          dark: gray[200],
          content: gray[950],
        },
        info: {
          main: blue[600],
          light: blue[500],
          dark: blue[700],
          content: white,
        },
        success: {
          main: green[600],
          light: green[500],
          dark: green[700],
          content: white,
        },
        warning: {
          main: yellow[400],
          light: yellow[300],
          dark: yellow[500],
          content: gray[950],
        },
        error: {
          main: red[600],
          light: red[500],
          dark: red[700],
          content: white,
        },
      },
    },
  },
  plugins: [],
};
