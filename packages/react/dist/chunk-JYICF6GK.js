"use client";
import {
  mergeTheme
} from "./chunk-75PWBAPF.js";
import {
  parseObject
} from "./chunk-C3THLIK7.js";
import {
  theme
} from "./chunk-U446753G.js";

// src/context/index.tsx
import React from "react";
import merge from "deepmerge";
import { jsx } from "react/jsx-runtime";
var MaterialTailwindThemeContext = React.createContext(theme);
MaterialTailwindThemeContext.displayName = "MaterialTailwind.ThemeProvider";
function ThemeProvider({ value, ...rest }) {
  const mainTheme = parseObject(theme);
  const providedTheme = parseObject(value);
  const combinedTheme = merge(mainTheme, providedTheme);
  const mergedTheme = mergeTheme(combinedTheme);
  return /* @__PURE__ */ jsx(MaterialTailwindThemeContext.Provider, { ...rest, value: mergedTheme });
}
function useTheme() {
  const context = React.useContext(MaterialTailwindThemeContext);
  if (!context) {
    return null;
  }
  return context;
}

export {
  MaterialTailwindThemeContext,
  ThemeProvider,
  useTheme
};
