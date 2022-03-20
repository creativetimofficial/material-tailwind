import { forwardRef, useContext, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Transition } from "react-transition-group";
import Ripple from "material-ripple-effects";
import merge from "deepmerge";
import validColors from "utils/validColors";
import { MaterialTailwindTheme } from "context/theme";

export const Alert = forwardRef(
  (
    {
      variant,
      color,
      icon,
      show,
      dismissible,
      animate,
      transitionProps,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const { alert } = useContext(MaterialTailwindTheme);
    const { defaultProps } = alert;
    const { root, variants, typography, spacing, border, animation } = alert.styles;
    const rippleEffect = new Ripple();
    const alertRef = useRef(null);

    variant = variant || defaultProps.variant;
    color = color || defaultProps.color;
    className = className || defaultProps.className;

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

    const mainTransition = {
      transition: {
        transitionProperty: "opacity",
        transitionDuration: "300ms",
        transitionTimingFunction: "linear",
        opacity: 0,
      },
      state: {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      },
    };

    const appliedTransition = merge.all([mainTransition, animation, { ...animate }]);

    const iconTemplate = <div className="absolute top-4 left-4">{icon}</div>;

    return dismissible ? (
      <Transition
        nodeRef={alertRef}
        in={show}
        timeout={(transitionProps && transitionProps.timeout) || 300}
        {...transitionProps}
      >
        {(state) => (
          <div
            ref={ref}
            role="alert"
            className={classes}
            style={{
              ...appliedTransition.transition,
              ...appliedTransition.state[state],
              transitionDuration:
                transitionProps && transitionProps.timeout
                  ? `${transitionProps.timeout}ms`
                  : appliedTransition.transition.transitionDuration,
            }}
            {...rest}
          >
            {icon && iconTemplate}
            <div className={`${icon ? "ml-8" : ""} mr-12`}>{children}</div>
            {dismissible && (
              <div className="absolute top-3 right-3 w-max rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={dismissible.onClose}
                  onKeyPress={() => null}
                  onMouseDown={(e) => !dismissible.action && rippleEffect.create(e, "light")}
                  className={`w-max ${dismissible.action ? "" : "p-1 rounded-full"}`}
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
          </div>
        )}
      </Transition>
    ) : (
      <div ref={ref} role="alert" className={classes} {...rest}>
        {icon ? (
          <>
            {iconTemplate}
            <div className="ml-8">{children}</div>
          </>
        ) : (
          children
        )}
      </div>
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
    timeout: PropTypes.number,
    action: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  }),
  animate: PropTypes.shape({
    transition: PropTypes.instanceOf(Object),
    state: PropTypes.instanceOf(Object),
  }),
  transitionProps: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Alert.displayName = "Alert";

export default Alert;
