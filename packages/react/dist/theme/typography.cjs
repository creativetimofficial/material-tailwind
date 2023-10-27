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

// src/theme/typography.ts
var typography_exports = {};
__export(typography_exports, {
  default: () => typography_default,
  typographyTheme: () => typographyTheme
});
module.exports = __toCommonJS(typography_exports);
var typographyTheme = {
  defaultProps: {
    variant: "p",
    color: "inherit",
    isGradient: false
  },
  baseStyle: "block font-sans antialiased",
  isGradient: "bg-clip-text text-transparent",
  variant: {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold",
    p: "text-base font-normal",
    small: "text-sm font-normal"
  },
  color: {
    inherit: "text-inherit",
    primary: "text-primary-main",
    secondary: "text-secondary-main",
    info: "text-info-main",
    success: "text-success-main",
    warning: "text-warning-main",
    error: "text-error-main"
  }
};
var typography_default = typographyTheme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  typographyTheme
});
