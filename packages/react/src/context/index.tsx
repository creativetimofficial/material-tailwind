import React from "react";
// import merge from "deepmerge";
import { theme } from "@theme";
// import combineMerge from "../utils/combineMerge";

export const MaterialTailwindTheme = React.createContext(theme);

MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";

export function ThemeProvider({ value = theme, ...rest }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return <MaterialTailwindTheme.Provider {...rest} value={mergedValue} />;
}

export const useTheme = () => React.useContext(MaterialTailwindTheme);
