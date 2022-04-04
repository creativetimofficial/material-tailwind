import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import theme from "theme/index";
import combineMerge from "utils/combineMerge";

const merge = require("deepmerge");

export const MaterialTailwindTheme = createContext(theme);

MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";

export function ThemeProvider({ value, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <MaterialTailwindTheme.Provider value={mergedValue}>{children}</MaterialTailwindTheme.Provider>
  );
}

export const useTheme = () => useContext(MaterialTailwindTheme);

ThemeProvider.defaultProps = {
  value: theme,
};

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};
