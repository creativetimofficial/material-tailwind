"use client";
import {
  useTheme
} from "./chunk-JYICF6GK.js";
import {
  collapseTheme
} from "./chunk-YP43SV3W.js";

// src/components/collapse.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var Collapse = React.forwardRef(
  ({ as, isOpen, className, children, ...rest }, ref) => {
    var _a;
    const Element = as != null ? as : "div";
    const contextTheme = useTheme();
    const theme = (_a = contextTheme == null ? void 0 : contextTheme.collapse) != null ? _a : collapseTheme;
    const styles = twMerge(
      theme.baseStyle,
      isOpen ? theme.openStyle : theme.closeStyle,
      className
    );
    return /* @__PURE__ */ jsx(Element, { ...rest, ref, className: styles, children });
  }
);
Collapse.displayName = "MaterialTailwind.Collapse";
var collapse_default = Collapse;

export {
  Collapse,
  collapse_default
};
