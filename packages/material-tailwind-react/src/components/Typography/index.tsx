import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  variant,
  color,
  textGradient,
  asType,
  className,
  children,
} from "../../types/components/typography";
import {
  propTypesVariant,
  propTypesColor,
  propTypesTextGradient,
  propTypesAs,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/typography";

export interface TypographyProps extends React.ComponentProps<any> {
  variant?: variant;
  color?: color;
  textGradient?: textGradient;
  as?: asType;
  className?: className;
  children: children;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, color, textGradient, as, className, children, ...rest }, ref) => {
    // 1. init
    const { typography } = useTheme();
    const { defaultProps, valid, styles } = typography;
    const { variants, colors, textGradient: gradient } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    textGradient = textGradient || defaultProps.textGradient;
    as = as ?? undefined;
    className = className ?? defaultProps.className;

    // 3. set styles
    const typographyVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "paragraph")],
    );
    const typographyColor = colors[findMatch(valid.colors, color, "inherit")];
    const gradientTextClasses = objectsToString(gradient);
    const classes = twMerge(
      classnames(
        typographyVariant,
        { [typographyColor.color]: !textGradient },
        { [gradientTextClasses]: textGradient },
        { [typographyColor.gradient]: textGradient },
      ),
      className,
    );

    // 4. set template
    let template;

    switch (variant) {
      case "h1":
        template = React.createElement(
          as || "h1",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "h2":
        template = React.createElement(
          as || "h2",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "h3":
        template = React.createElement(
          as || "h3",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "h4":
        template = React.createElement(
          as || "h4",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "h5":
        template = React.createElement(
          as || "h5",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "h6":
        template = React.createElement(
          as || "h6",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "lead":
        template = React.createElement(
          as || "p",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "paragraph":
        template = React.createElement(
          as || "p",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      case "small":
        template = React.createElement(
          as || "p",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
      default:
        template = React.createElement(
          as || "p",
          {
            ...rest,
            ref,
            className: classes,
          },
          children,
        );
        break;
    }

    // 5. return
    return template;
  },
);

Typography.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  as: propTypesAs,
  textGradient: propTypesTextGradient,
  className: propTypesClassName,
  children: propTypesChildren,
};

Typography.displayName = "MaterialTailwind.Typography";

export default Typography;
