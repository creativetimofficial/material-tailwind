import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Alert = forwardRef(
  ({ variant, color, icon, show, dismissible, animate, className, children, ...rest }, ref) => {
    // 1. init
    const { alert } = useTheme();
    const { defaultProps, valid, styles } = alert;
    const { base, variants } = styles;
    const rippleEffect = new Ripple();

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = className ?? defaultProps.className;
    animate = animate ?? defaultProps.animate;
    show = show ?? defaultProps.show;

    // 3. set styles
    const alertBase = objectsToString(base);
    const alertVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "light-blue")
      ],
    );
    const classes = classnames(alertBase, alertVariant, className);

    // 4. set animation
    const mainAnimation = {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    };
    const appliedAnimation = merge(mainAnimation, animate);

    // 5. icon template
    const iconTemplate = <div className="absolute top-4 left-4">{icon}</div>;

    // 6. return
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            {...rest}
            ref={ref}
            role="alert"
            className={classes}
            initial="unmount"
            exit="unmount"
            animate={show ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {icon && iconTemplate}
            <div className={`${icon ? "ml-8" : ""} mr-12`}>{children}</div>
            {dismissible && (
              <div className="absolute top-3 right-3 w-max rounded-lg hover:bg-white hover:bg-opacity-20 transition-all">
                <div
                  role="button"
                  onClick={dismissible.onClose}
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

export { Alert };
export default Alert;
