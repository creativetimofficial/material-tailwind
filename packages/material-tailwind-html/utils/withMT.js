const breakpoints = require("../theme/base/breakpoints");

/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

const merge = require("deepmerge");
const plugin = require("tailwindcss/plugin");
const colors = require("../theme/base/colors");
const typography = require("../theme/base/typography");
const shadows = require("../theme/base/shadows");

// components styles
const { accordion } = require("../theme/components/accordion");
const { alert } = require("../theme/components/alert");
const { avatar } = require("../theme/components/avatar");
const { background } = require("../theme/components/background");
const { breadcrumbs } = require("../theme/components/breadcrumbs");
const { button } = require("../theme/components/button");
const { card } = require("../theme/components/card");
const { checkbox } = require("../theme/components/checkbox");
const { chip } = require("../theme/components/chip");
const { dialog } = require("../theme/components/dialog");
const { input } = require("../theme/components/input");
const { menu } = require("../theme/components/menu");
const { navbar } = require("../theme/components/navbar");
const { pagination } = require("../theme/components/pagination");
const { popover } = require("../theme/components/popover");
const { progress } = require("../theme/components/progress");
const { radio } = require("../theme/components/radio");
const { tabs } = require("../theme/components/tabs");
const { toggle } = require("../theme/components/switch");
const { tooltip } = require("../theme/components/tooltip");
const { typo } = require("../theme/components/typo");

const materialTailwindConfig = {
  darkMode: "class",
  content: ["hello"],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents(accordion(theme));
      addComponents(alert(theme));
      addComponents(avatar(theme));
      addComponents(background(theme));
      addComponents(breadcrumbs(theme));
      addComponents(button(theme));
      addComponents(card(theme));
      addComponents(checkbox(theme));
      addComponents(chip(theme));
      addComponents(dialog(theme));
      addComponents(input(theme));
      addComponents(menu(theme));
      addComponents(navbar(theme));
      addComponents(pagination(theme));
      addComponents(popover(theme));
      addComponents(progress(theme));
      addComponents(radio(theme));
      addComponents(tabs(theme));
      addComponents(toggle(theme));
      addComponents(tooltip(theme));
      addComponents(typo(theme));
    })
  ]
};

/**
 * Merge @material-tailwind and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withMT(tailwindConfig) {
  const themeFont = materialTailwindConfig.theme.fontFamily;

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily;

    themeFont.sans = sans || themeFont.sans;
    themeFont.serif = serif || themeFont.serif;
    themeFont.body = body || themeFont.body;
  }

  return merge(materialTailwindConfig, { ...tailwindConfig });
}

module.exports = withMT;
