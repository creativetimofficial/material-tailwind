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

// src/theme/button-group.ts
var button_group_exports = {};
__export(button_group_exports, {
  buttonGroupTheme: () => buttonGroupTheme,
  default: () => button_group_default
});
module.exports = __toCommonJS(button_group_exports);
var buttonGroupTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    fullWidth: false,
    orientation: "horizontal"
  },
  baseStyle: "inline-flex",
  vertical: "flex-col",
  horizontal: "flex-row",
  verticalAppearance: "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-b-none last:[&_*]:rounded-t-none [&:not(:first-child):not(:last-child)]:[&_*]:border-t-0 last:[&_*]:border-t-0",
  horizontalAppearance: "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-r-none last:[&_*]:rounded-l-none [&:not(:first-child):not(:last-child)]:[&_*]:border-l-0 last:[&_*]:border-l-0",
  fullWidth: "w-full"
};
var button_group_default = buttonGroupTheme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buttonGroupTheme
});
