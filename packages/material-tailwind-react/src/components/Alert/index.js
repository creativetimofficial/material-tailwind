import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Ripple from "material-ripple-effects";
import merge from "deepmerge";
import validColors from "utils/validColors";
import { MaterialTailwindTheme } from "context/theme";

export const Alert = forwardRef(
  ({ variant, color, icon, show, dismissible, animate, className, children, ...rest }, ref) => {
    const { alert } = useContext(MaterialTailwindTheme);
    const { defaultProps } = alert;
    const { root, variants, typography, spacing, border } = alert.styles;
    const rippleEffect = new Ripple();

    variant = variant || defaultProps.variant;
    color = color || defaultProps.color;
    className = className || defaultProps.className;
    animate = animate || defaultProps.animate;
    show = show === undefined ? defaultProps.show : show;

    const alertVariant = variants[variant]
      ? Object.values(variants[variant][validColors[color] || defaultProps.color]).join(" ")
      : "";
    const alertTypography = Object.values(typography).join(" ");
    const alertPadding = Object.values(spacing).join(" ");
    const alertBorder = Object.values(border).join(" ");

    const classes = classnames(
      root,
      alertVariant,
      alertTypography,
      alertPadding,
      alertBorder,
      className,
    );

    const mainAnimation = {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);

    const iconTemplate = <div className="absolute top-4 left-4">{icon}</div>;

    return (
      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            role="alert"
            className={classes}
            initial="unmount"
            exit="unmount"
            animate={show ? "mount" : "unmount"}
            variants={appliedAnimation}
            {...rest}
          >
            {icon && iconTemplate}
            <div className={`${icon ? "ml-8" : ""} mr-12`}>{children}</div>
            {dismissible && (
              <div className="absolute top-3 right-3 w-max rounded-lg hover:bg-white hover:bg-opacity-20 transition-all">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={dismissible.onClose}
                  onKeyPress={() => null}
                  onMouseDown={(e) => !dismissible.action && rippleEffect.create(e, "light")}
                  className={`w-max ${dismissible.action ? "" : "p-1 rounded-lg"}`}
                >
                  {dismissible.action || (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

Alert.propTypes = {
  variant: PropTypes.oneOf(["filled", "gradient"]),
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
  icon: PropTypes.node,
  show: PropTypes.bool,
  dismissible: PropTypes.shape({
    action: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  }),
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Alert.displayName = "Alert";

export default Alert;
