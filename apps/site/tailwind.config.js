import tailwindAnimate from "tailwindcss-animate";
import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/react/src/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/react/src/theme/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "conic-gradient":
          "conic-gradient(from 180deg at 50% 50%,#f97315 0deg,#f97315 120deg,rgba(0,0,0,0) 360deg)",
        "conic-gradient-dark":
          "conic-gradient(from 180deg at 50% 50%,#f97315 0deg,#f97315 120deg,rgba(0,0,0,0) 360deg)",
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
  plugins: [mtConfig, tailwindAnimate],
};
