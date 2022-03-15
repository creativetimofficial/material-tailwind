/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

const merge = require("deepmerge");
const colors = require("../theme/base/colors");
const typography = require("../theme/base/typography");
const shadows = require("../theme/base/shadows");

const materialTailwindConfig = {
  darkMode: "class",
  content: [
    "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/material-tailwind-react/src/theme/components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
  },
  plugins: [],
};

function arrayMerge(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

/**
 * Merge @material-tailwind and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withTM(tailwindConfig) {
  let purge;
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    };
  } else {
    purge = tailwindConfig.purge;
  }

  return merge(
    materialTailwindConfig,
    { ...tailwindConfig, purge },
    {
      arrayMerge,
    },
  );
}

module.exports = withTM;
