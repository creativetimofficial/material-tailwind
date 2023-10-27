"use client";
import {
  useTheme
} from "./chunk-JYICF6GK.js";
import {
  buttonGroupTheme
} from "./chunk-3AFINC5X.js";

// src/components/button-group.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var ButtonGroup = React.forwardRef(
  ({
    color,
    variant,
    size,
    ripple,
    rounded,
    fullWidth,
    className,
    orientation,
    children,
    ...rest
  }, ref) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const contextTheme = useTheme();
    const theme = (_a = contextTheme == null ? void 0 : contextTheme.buttonGroup) != null ? _a : buttonGroupTheme;
    const defaultProps = (_b = contextTheme == null ? void 0 : contextTheme.buttonGroup) == null ? void 0 : _b.defaultProps;
    size != null ? size : size = (_c = defaultProps == null ? void 0 : defaultProps.size) != null ? _c : "md";
    ripple != null ? ripple : ripple = (_d = defaultProps == null ? void 0 : defaultProps.ripple) != null ? _d : true;
    color != null ? color : color = (_e = defaultProps == null ? void 0 : defaultProps.color) != null ? _e : "primary";
    variant != null ? variant : variant = (_f = defaultProps == null ? void 0 : defaultProps.variant) != null ? _f : "solid";
    orientation != null ? orientation : orientation = (_g = defaultProps == null ? void 0 : defaultProps.orientation) != null ? _g : "horizontal";
    fullWidth != null ? fullWidth : fullWidth = (_h = defaultProps == null ? void 0 : defaultProps.fullWidth) != null ? _h : false;
    const isGhost = variant === "ghost";
    const isVertical = orientation === "vertical";
    const isHorizontal = orientation === "horizontal";
    const styles = twMerge(
      theme.baseStyle,
      isVertical && theme["vertical"],
      isHorizontal && theme["horizontal"],
      isVertical && !isGhost && theme["verticalAppearance"],
      isHorizontal && !isGhost && theme["horizontalAppearance"],
      fullWidth && theme["fullWidth"],
      className
    );
    return /* @__PURE__ */ jsx("div", { ...rest, ref, className: styles, children: React.Children.map(
      children,
      (child) => React.isValidElement(child) && React.cloneElement(child, {
        variant,
        size,
        color,
        ripple,
        rounded,
        fullWidth,
        ...child.props
      })
    ) });
  }
);
ButtonGroup.displayName = "MaterialTailwind.ButtonGroup";
var button_group_default = ButtonGroup;

export {
  ButtonGroup,
  button_group_default
};
