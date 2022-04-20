import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Typography = forwardRef(
  ({ variant, color, textGradient, as, className, children, ...rest }, ref) => {
    // 1. init
    const { typography } = useTheme();
    const { defaultProps, valid, styles } = typography;
    const { variants, colors, textGradient: gradient } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    textGradient = textGradient ?? defaultProps.textGradient;
    as = as ?? undefined;
    className = className ?? defaultProps.className;

    // 3. set styles
    const typographyVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "paragraph")],
    );
    const typographyColor = colors[findMatch(valid.colors, color, "blue-grey")];
    const gradientTextClasses = objectsToString(gradient);
    const classes = classnames(
      typographyVariant,
      typographyColor.color,
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
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "lead", "paragraph", "small"]),
  color: PropTypes.oneOf([
    "inherit",
    "current",
    "black",
    "white",
    "blue-grey",
    "grey",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  as: PropTypes.elementType,
  textGradient: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Typography.displayName = "Typography";

export default Typography;
