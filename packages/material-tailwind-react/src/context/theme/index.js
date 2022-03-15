const merge = require("deepmerge");

import { createContext } from "react";
import PropTypes from "prop-types";

import theme from "@material-tailwind/react/theme";

export const MaterialTailwindTheme = createContext(theme);
MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";

export function ThemeProvider({ value, children }) {
  return (
    <MaterialTailwindTheme.Provider value={merge(theme, value)}>
      {children}
    </MaterialTailwindTheme.Provider>
  );
}

ThemeProvider.defaultProps = {
  value: theme,
};

ThemeProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.node.isRequired,
};
