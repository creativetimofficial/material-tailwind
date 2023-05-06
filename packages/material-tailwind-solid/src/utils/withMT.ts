/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

import { deepmerge } from "deepmerge-ts";
import { colors } from "../theme/base/colors";
import { typography } from "../theme/base/typography";
import { shadows } from "../theme/base/shadows";
import { breakpoints } from "../theme/base/breakpoints";

const materialTailwindConfig = {
  darkMode: "class",
  content: [
    "./node_modules/@material-tailwind/solid/src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/solid/src/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
};

/**
 * Merge @material-tailwind and Tailwind CSS configurations
 */
export default function withMT(tailwindConfig: Partial<typeof materialTailwindConfig>) {
  const themeFont = materialTailwindConfig.theme.fontFamily;

  if (tailwindConfig?.theme?.fontFamily) {
    const customFont = tailwindConfig.theme.fontFamily;

    themeFont.sans = customFont?.sans || themeFont.sans;
    themeFont.serif = customFont?.serif || themeFont.serif;
    themeFont.body = customFont?.body || themeFont.body;
  }

  return deepmerge(materialTailwindConfig, { ...tailwindConfig });
}
