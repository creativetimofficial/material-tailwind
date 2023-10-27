"use client";
import {
  useTheme
} from "./chunk-JYICF6GK.js";
import {
  typographyTheme
} from "./chunk-KF3ZOAAE.js";

// src/components/typography.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var Typography = React.forwardRef(
  ({ as, color, variant, isGradient, className, children, ...rest }, ref) => {
    var _a, _b, _c, _d, _e;
    const Element = (_a = as != null ? as : variant) != null ? _a : "p";
    const contextTheme = useTheme();
    const theme = (_b = contextTheme == null ? void 0 : contextTheme.typography) != null ? _b : typographyTheme;
    const defaultProps = (_c = contextTheme == null ? void 0 : contextTheme.typography) == null ? void 0 : _c.defaultProps;
    color != null ? color : color = (_d = defaultProps == null ? void 0 : defaultProps.color) != null ? _d : "inherit";
    variant != null ? variant : variant = (_e = defaultProps == null ? void 0 : defaultProps.variant) != null ? _e : "p";
    const styles = twMerge(
      theme.baseStyle,
      theme["variant"][variant],
      theme["color"][color],
      isGradient ? theme["isGradient"] : {},
      className
    );
    return /* @__PURE__ */ jsx(Element, { ...rest, ref, className: styles, children });
  }
);
Typography.displayName = "MaterialTailwind.Typography";
var typography_default = Typography;

export {
  Typography,
  typography_default
};
