"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/merge-theme.ts
var merge_theme_exports = {};
__export(merge_theme_exports, {
  default: () => merge_theme_default,
  mergeTheme: () => mergeTheme
});
module.exports = __toCommonJS(merge_theme_exports);
var import_tailwind_merge = require("tailwind-merge");
function mergeTheme(entry) {
  const result = {};
  const defaultProps = entry == null ? void 0 : entry["defaultProps"];
  for (const key in entry) {
    if (key !== "defaultProps") {
      if (Array.isArray(entry[key])) {
        Object.assign(result, {
          [key]: (0, import_tailwind_merge.twMerge)(entry[key].join(" "))
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mergeTheme
});
