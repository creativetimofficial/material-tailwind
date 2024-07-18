"use client";

import * as React from "react";

// @theme
import { theme } from "src/theme";

// @utils
import merge from "deepmerge";
import { parseObject, mergeTheme } from "@utils";

export const MaterialTailwindThemeContext = React.createContext<any>(theme);

MaterialTailwindThemeContext.displayName = "MaterialTailwind.ThemeProvider";

/**
 * @remarks
 * [Documentation](https://www.material-tailwind.com/docs/react/theming) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/theming#theme-provider-props)
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from "@material-tailwind/react";
 *
 * export default function App() {
 *  return (
 *    <ThemeProvider value={{...}}>
 *      {...}
 *    </ThemeProvider>
 *  );
 * }
 * ```
 */
export function ThemeProvider({
  value,
  children,
}: {
  value: any;
  children: React.ReactNode;
}) {
  const mainTheme = parseObject(theme);
  const providedTheme = parseObject(value);
  const combinedTheme = merge(mainTheme, providedTheme);
  const mergedTheme = mergeTheme(combinedTheme as object);

  return (
    <MaterialTailwindThemeContext.Provider value={mergedTheme}>
      {children}
    </MaterialTailwindThemeContext.Provider>
  );
}

/**
 * Gets the Material Tailwind Theme Object
 * @returns Object
 */
export function useTheme() {
  const context = React.useContext(MaterialTailwindThemeContext);

  if (!context) {
    return null;
  }

  return context;
}
