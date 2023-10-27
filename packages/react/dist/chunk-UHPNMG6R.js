"use client";
import {
  useTheme
} from "./chunk-JYICF6GK.js";
import {
  iconButtonTheme
} from "./chunk-QHKGW2KE.js";

// src/components/icon-button.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";
import { jsx } from "react/jsx-runtime";
var IconButton = React.forwardRef(
  ({ color, variant, size, ripple, rounded, className, children, ...rest }, ref) => {
    var _a, _b, _c, _d, _e, _f;
    const contextTheme = useTheme();
    const theme = (_a = contextTheme == null ? void 0 : contextTheme.iconButton) != null ? _a : iconButtonTheme;
    const defaultProps = (_b = contextTheme == null ? void 0 : contextTheme.iconButton) == null ? void 0 : _b.defaultProps;
    size != null ? size : size = (_c = defaultProps == null ? void 0 : defaultProps.size) != null ? _c : "md";
    ripple != null ? ripple : ripple = (_d = defaultProps == null ? void 0 : defaultProps.ripple) != null ? _d : true;
    color != null ? color : color = (_e = defaultProps == null ? void 0 : defaultProps.color) != null ? _e : "primary";
    variant != null ? variant : variant = (_f = defaultProps == null ? void 0 : defaultProps.variant) != null ? _f : "solid";
    const rippleEffect = ripple !== void 0 && new Ripple();
    const handleClick = (e) => {
      const onClick = rest == null ? void 0 : rest.onClick;
      const isDarkRipple = variant === "ghost" || color === "secondary" || color === "warning";
      if (ripple) {
        rippleEffect.create(e, isDarkRipple ? "dark" : "light");
      }
      return typeof onClick === "function" && onClick(e);
    };
    const styles = twMerge(
      theme.baseStyle,
      theme["size"][size],
      theme["variant"][variant][color],
      rounded && theme["rounded"],
      className
    );
    return /* @__PURE__ */ jsx("button", { ...rest, ref, className: styles, onClick: handleClick, children });
  }
);
IconButton.displayName = "MaterialTailwind.IconButton";
var icon_button_default = IconButton;

export {
  IconButton,
  icon_button_default
};
