import { createContext } from "react";
import PropTypes from "prop-types";
import theme from "theme/index";

const merge = require("deepmerge");

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
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};
