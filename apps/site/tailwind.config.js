const { gray, white, blue, green, yellow, red } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/react/src/theme/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
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
      backgroundImage: {
        "conic-gradient":
          "conic-gradient(from 180deg at 50% 50%,#030712 0deg,#3b82f6 120deg,rgba(42,138,246,0) 360deg)",
        "grid-pattern-light": `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cmask id=%22b%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22%3E%3Cpath fill=%22url(%23a)%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3C%2Fmask%3E%3Cpath fill=%22%23f9fafb%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cg style=%22transform-origin:center center%22 stroke=%22%23d1d5db%22 stroke-width=%22.6%22 mask=%22url(%23b)%22%3E%3Cpath fill=%22none%22 d=%22M105 0h105v105H105z%22%2F%3E%3Cpath fill=%22%23d1d5db1b%22 d=%22M210 0h105v105H210z%22%2F%3E%3Cpath fill=%22none%22 d=%22M315 0h105v105H315zM420 0h105v105H420z%22%2F%3E%3Cpath fill=%22%23d1d5db57%22 d=%22M525 0h105v105H525z%22%2F%3E%3Cpath fill=%22none%22 d=%22M630 0h105v105H630zM735 0h105v105H735zM840 0h105v105H840zM945 0h105v105H945z%22%2F%3E%3Cpath fill=%22%23d1d5db48%22 d=%22M1050 0h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1155 0h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db90%22 d=%22M1260 0h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1365 0h105v105h-105zM1470 0h105v105h-105zM1575 0h105v105h-105zM1680 0h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db8a%22 d=%22M1785 0h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1890 0h105v105h-105zM105 105h105v105H105zM315 105h105v105H315zM420 105h105v105H420zM525 105h105v105H525zM630 105h105v105H630z%22%2F%3E%3Cpath fill=%22%23d1d5db5a%22 d=%22M945 105h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1155 105h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbce%22 d=%22M1260 105h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1365 105h105v105h-105zM1470 105h105v105h-105zM1575 105h105v105h-105zM1680 105h105v105h-105zM1785 105h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbbc%22 d=%22M1890 105h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M105 210h105v105H105zM315 210h105v105H315zM525 210h105v105H525zM735 210h105v105H735zM840 210h105v105H840zM1050 210h105v105h-105zM1155 210h105v105h-105zM1260 210h105v105h-105zM1365 210h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db45%22 d=%22M1575 210h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db22%22 d=%22M1680 210h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1890 210h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db81%22 d=%22M105 315h105v105H105z%22%2F%3E%3Cpath fill=%22%23d1d5db6a%22 d=%22M210 315h105v105H210z%22%2F%3E%3Cpath fill=%22none%22 d=%22M420 315h105v105H420zM525 315h105v105H525z%22%2F%3E%3Cpath fill=%22%23d1d5db3c%22 d=%22M630 315h105v105H630z%22%2F%3E%3Cpath fill=%22none%22 d=%22M735 315h105v105H735zM1155 315h105v105h-105zM1470 315h105v105h-105zM1680 315h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db93%22 d=%22M1785 315h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1890 315h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db49%22 d=%22M105 420h105v105H105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M210 420h105v105H210z%22%2F%3E%3Cpath fill=%22%23d1d5dbb7%22 d=%22M315 420h105v105H315z%22%2F%3E%3Cpath fill=%22none%22 d=%22M420 420h105v105H420zM525 420h105v105H525zM735 420h105v105H735zM840 420h105v105H840zM1050 420h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db78%22 d=%22M1155 420h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1365 420h105v105h-105zM1470 420h105v105h-105zM1575 420h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db06%22 d=%22M1785 420h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M105 525h105v105H105z%22%2F%3E%3Cpath fill=%22%23d1d5db6a%22 d=%22M210 525h105v105H210z%22%2F%3E%3Cpath fill=%22%23d1d5db1c%22 d=%22M315 525h105v105H315z%22%2F%3E%3Cpath fill=%22%23d1d5db0d%22 d=%22M420 525h105v105H420z%22%2F%3E%3Cpath fill=%22none%22 d=%22M525 525h105v105H525z%22%2F%3E%3Cpath fill=%22%23d1d5dbe4%22 d=%22M1050 525h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1155 525h105v105h-105zM1260 525h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db57%22 d=%22M1365 525h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1470 525h105v105h-105zM1575 525h105v105h-105zM1680 525h105v105h-105zM0 630h105v105H0zM105 630h105v105H105zM210 630h105v105H210z%22%2F%3E%3Cpath fill=%22%23d1d5dbb2%22 d=%22M315 630h105v105H315z%22%2F%3E%3Cpath fill=%22none%22 d=%22M420 630h105v105H420z%22%2F%3E%3Cpath fill=%22%23d1d5db54%22 d=%22M525 630h105v105H525z%22%2F%3E%3Cpath fill=%22none%22 d=%22M630 630h105v105H630zM735 630h105v105H735zM840 630h105v105H840z%22%2F%3E%3Cpath fill=%22%23d1d5db2a%22 d=%22M945 630h105v105H945z%22%2F%3E%3Cpath fill=%22%23d1d5dbbe%22 d=%22M1365 630h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1470 630h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbf3%22 d=%22M1575 630h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1680 630h105v105h-105zM1785 630h105v105h-105zM105 735h105v105H105zM210 735h105v105H210z%22%2F%3E%3Cpath fill=%22%23d1d5dbea%22 d=%22M315 735h105v105H315z%22%2F%3E%3Cpath fill=%22%23d1d5db79%22 d=%22M420 735h105v105H420z%22%2F%3E%3Cpath fill=%22none%22 d=%22M525 735h105v105H525z%22%2F%3E%3Cpath fill=%22%23d1d5db5f%22 d=%22M630 735h105v105H630z%22%2F%3E%3Cpath fill=%22none%22 d=%22M735 735h105v105H735zM840 735h105v105H840z%22%2F%3E%3Cpath fill=%22%23d1d5db6a%22 d=%22M945 735h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1155 735h105v105h-105zM1365 735h105v105h-105zM1470 735h105v105h-105zM1575 735h105v105h-105zM1680 735h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbb0%22 d=%22M1785 735h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1890 735h105v105h-105zM0 840h105v105H0zM210 840h105v105H210zM420 840h105v105H420zM525 840h105v105H525zM630 840h105v105H630zM735 840h105v105H735z%22%2F%3E%3Cpath fill=%22%23d1d5db61%22 d=%22M840 840h105v105H840z%22%2F%3E%3Cpath fill=%22%23d1d5db2d%22 d=%22M1050 840h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db08%22 d=%22M1155 840h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1365 840h105v105h-105zM1470 840h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dba7%22 d=%22M1890 840h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db99%22 d=%22M0 945h105v105H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M210 945h105v105H210zM315 945h105v105H315zM420 945h105v105H420z%22%2F%3E%3Cpath fill=%22%23d1d5db14%22 d=%22M735 945h105v105H735z%22%2F%3E%3Cpath fill=%22%23d1d5db52%22 d=%22M945 945h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1050 945h105v105h-105zM1155 945h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db85%22 d=%22M1365 945h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbbb%22 d=%22M1575 945h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1680 945h105v105h-105zM1785 945h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db2c%22 d=%22M1890 945h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbde%22 d=%22M0 1050h105v105H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M210 1050h105v105H210zM315 1050h105v105H315zM420 1050h105v105H420zM525 1050h105v105H525zM630 1050h105v105H630z%22%2F%3E%3Cpath fill=%22%23d1d5dbb9%22 d=%22M735 1050h105v105H735z%22%2F%3E%3Cpath fill=%22%23d1d5db2e%22 d=%22M945 1050h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1050 1050h105v105h-105zM1155 1050h105v105h-105zM1260 1050h105v105h-105zM1470 1050h105v105h-105zM1575 1050h105v105h-105zM1680 1050h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db37%22 d=%22M1785 1050h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1890 1050h105v105h-105zM0 1155h105v105H0zM315 1155h105v105H315zM420 1155h105v105H420zM525 1155h105v105H525zM630 1155h105v105H630zM735 1155h105v105H735zM840 1155h105v105H840z%22%2F%3E%3Cpath fill=%22%23d1d5db9f%22 d=%22M945 1155h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1155 1155h105v105h-105zM1260 1155h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbee%22 d=%22M1470 1155h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1575 1155h105v105h-105zM1680 1155h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db58%22 d=%22M1890 1155h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 1260h105v105H0zM105 1260h105v105H105zM210 1260h105v105H210zM315 1260h105v105H315z%22%2F%3E%3Cpath fill=%22%23d1d5dbcf%22 d=%22M420 1260h105v105H420z%22%2F%3E%3Cpath fill=%22none%22 d=%22M525 1260h105v105H525z%22%2F%3E%3Cpath fill=%22%23d1d5dbab%22 d=%22M735 1260h105v105H735z%22%2F%3E%3Cpath fill=%22%23d1d5db6d%22 d=%22M840 1260h105v105H840z%22%2F%3E%3Cpath fill=%22none%22 d=%22M945 1260h105v105H945zM1050 1260h105v105h-105zM1155 1260h105v105h-105zM1260 1260h105v105h-105zM1365 1260h105v105h-105zM1470 1260h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbb6%22 d=%22M1575 1260h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1680 1260h105v105h-105zM1785 1260h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbdb%22 d=%22M105 1365h105v105H105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M210 1365h105v105H210zM315 1365h105v105H315zM525 1365h105v105H525z%22%2F%3E%3Cpath fill=%22%23d1d5db2d%22 d=%22M735 1365h105v105H735z%22%2F%3E%3Cpath fill=%22none%22 d=%22M840 1365h105v105H840z%22%2F%3E%3Cpath fill=%22%23d1d5db7b%22 d=%22M945 1365h105v105H945z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1050 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dbc9%22 d=%22M1260 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5dba1%22 d=%22M1365 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1470 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db94%22 d=%22M1575 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1785 1365h105v105h-105z%22%2F%3E%3Cpath fill=%22%23d1d5db3e%22 d=%22M1890 1365h105v105h-105z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%2250%25%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%22.5%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`,
      },
      keyframes: {
        "gradient-spin": {
          "0%": { transform: "translate(-50%,-50%) rotate(1turn)" },
          "100%": { transform: "translate(-50%,-50%) rotate(0)" },
        },
      },
      animation: {
        "gradient-spin": "gradient-spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
