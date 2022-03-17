/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

const merge = require("deepmerge");
const plugin = require("tailwindcss/plugin");
const colors = require("../theme/base/colors");
const typography = require("../theme/base/typography");
const shadows = require("../theme/base/shadows");

// components styles
const { button } = require("../theme/components/button");
const { alert } = require("../theme/components/alert");

const materialTailwindConfig = {
  darkMode: "class",
  content: [],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents(button(theme));
      addComponents(alert(theme));
    })
  ]
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
      content: tailwindConfig.purge
    };
  } else {
    purge = tailwindConfig.purge;
  }

  console.log(materialTailwindConfig);

  return merge(
    materialTailwindConfig,
    { ...tailwindConfig, purge },
    {
      arrayMerge
    }
  );
}

module.exports = withTM;
