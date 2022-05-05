import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
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
    const classes = classnames(
      typographyVariant,
      { [typographyColor.color]: !textGradient },
      { [gradientTextClasses]: textGradient },
      { [typographyColor.gradient]: textGradient },
      className,
    );

    // 4. set variant
    let template;
    const Heading1 = as || "h1";
    const Heading2 = as || "h2";
    const Heading3 = as || "h3";
    const Heading4 = as || "h4";
    const Heading5 = as || "h5";
    const Heading6 = as || "h6";
    const Paragraph = as || "p";
    const SmallText = as || "small";

    switch (variant) {
      case "h1":
        template = (
          <Heading1 {...rest} ref={ref} className={classes}>
            {children}
          </Heading1>
        );
        break;
      case "h2":
        template = (
          <Heading2 {...rest} ref={ref} className={classes}>
            {children}
          </Heading2>
        );
        break;
      case "h3":
        template = (
          <Heading3 {...rest} ref={ref} className={classes}>
            {children}
          </Heading3>
        );
        break;
      case "h4":
        template = (
          <Heading4 {...rest} ref={ref} className={classes}>
            {children}
          </Heading4>
        );
        break;
      case "h5":
        template = (
          <Heading5 {...rest} ref={ref} className={classes}>
            {children}
          </Heading5>
        );
        break;
      case "h6":
        template = (
          <Heading6 {...rest} ref={ref} className={classes}>
            {children}
          </Heading6>
        );
        break;
      case "lead":
        template = (
          <Paragraph {...rest} ref={ref} className={classes}>
            {children}
          </Paragraph>
        );
        break;
      case "paragraph":
        template = (
          <Paragraph {...rest} ref={ref} className={classes}>
            {children}
          </Paragraph>
        );
        break;
      case "small":
        template = (
          <SmallText {...rest} ref={ref} className={classes}>
            {children}
          </SmallText>
        );
        break;
      default:
        template = (
          <Paragraph {...rest} ref={ref} className={classes}>
            {children}
          </Paragraph>
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
