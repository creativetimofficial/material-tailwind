import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import { MaterialTailwindTheme } from "context/theme";

export const Button = forwardRef(
  ({ variant, size, color, fullWidth, ripple, className, children, ...rest }, ref) => {
    const theme = useContext(MaterialTailwindTheme);
    console.log(theme);
    return (
      <button ref={ref} className={className} {...rest}>
        {children}
      </button>
    );
  },
);

Button.defaultProps = {
  variant: "filled",
  size: "md",
  color: "blue",
  fullWidth: false,
  ripple: false,
  className: "",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "gradient", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
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
  fullWidth: PropTypes.bool,
  ripple: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.displayName = "Button";

export default Button;
