import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MaterialTailwindTheme } from "context/theme";
import objectsToString from "utils/objectsToString";

export const Typography = forwardRef(
  ({ variant, color, textGradient, className, children, ...rest }, ref) => {
    const { typography } = useContext(MaterialTailwindTheme);
    const { defaultProps } = typography;
    const { variants, colors, textGradient: gradient } = typography.styles;

    variant = variant || defaultProps.variant;
    color = color || defaultProps.color;
    textGradient = textGradient || defaultProps.textGradient;
    className = className || defaultProps.className;

    const typographyVariant = variants[variant] ? objectsToString(variants[variant]) : "";
    const typographyColor = colors[color]
      ? colors[color]
      : {
          color: "text-blue-grey-900",
          gradient: "bg-gradient-to-tr from-blue-grey-600 to-blue-grey-400",
        };

    const classes = classnames(
      typographyVariant,
      typographyColor.color,
      { [gradient]: textGradient },
      { [typographyColor.gradient]: textGradient },
      className,
    );

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

    return template;
  },
);

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "lead", "paragraph", "small"]),
  color: PropTypes.oneOf([
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
