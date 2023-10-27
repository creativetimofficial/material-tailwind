"use client";

// src/utils/merge-theme.ts
import { twMerge } from "tailwind-merge";
function mergeTheme(entry) {
  const result = {};
  const defaultProps = entry == null ? void 0 : entry["defaultProps"];
  for (const key in entry) {
    if (key !== "defaultProps") {
      if (Array.isArray(entry[key])) {
        Object.assign(result, {
          [key]: twMerge(entry[key].join(" "))
        });
      } else {
        Object.assign(result, {
          [key]: mergeTheme(entry[key])
        });
      }
    }
  }
  return defaultProps ? {
    ...result,
    defaultProps
  } : result;
}
var merge_theme_default = mergeTheme;

export {
  mergeTheme,
  merge_theme_default
};
