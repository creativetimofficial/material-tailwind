import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

const MaterialTailwindTheme = createContext(theme);

MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";

function ThemeProvider({ value = theme, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <MaterialTailwindTheme.Provider value={mergedValue}>{children}</MaterialTailwindTheme.Provider>
  );
}

const useTheme = () => useContext(MaterialTailwindTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { MaterialTailwindTheme, ThemeProvider, useTheme };
