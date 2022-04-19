import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Typography = forwardRef(
  ({ variant, color, textGradient, className, children, ...rest }, ref) => {
    // 1. init
    const { typography } = useTheme();
    const { defaultProps, valid, styles } = typography;
    const { variants, colors, textGradient: gradient } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    textGradient = textGradient ?? defaultProps.textGradient;
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

    switch (variant) {
      case "h1":
        template = (
          <h1 {...rest} ref={ref} className={classes}>
            {children}
          </h1>
        );
        break;
      case "h2":
        template = (
          <h2 {...rest} ref={ref} className={classes}>
            {children}
          </h2>
        );
        break;
      case "h3":
        template = (
          <h3 {...rest} ref={ref} className={classes}>
            {children}
          </h3>
        );
        break;
      case "h4":
        template = (
          <h4 {...rest} ref={ref} className={classes}>
            {children}
          </h4>
        );
        break;
      case "h5":
        template = (
          <h5 {...rest} ref={ref} className={classes}>
            {children}
          </h5>
        );
        break;
      case "h6":
        template = (
          <h6 {...rest} ref={ref} className={classes}>
            {children}
          </h6>
        );
        break;
      case "lead":
        template = (
          <p {...rest} ref={ref} className={classes}>
            {children}
          </p>
        );
        break;
      case "paragraph":
        template = (
          <p {...rest} ref={ref} className={classes}>
            {children}
          </p>
        );
        break;
      case "small":
        template = (
          <small {...rest} ref={ref} className={classes}>
            {children}
          </small>
        );
        break;
      default:
        template = (
          <p {...rest} ref={ref} className={classes}>
            {children}
          </p>
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
  textGradient: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Typography.displayName = "Typography";

export default Typography;
