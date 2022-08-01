import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, motion, MotionProps } from "framer-motion";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import merge from "deepmerge";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type {
  variant,
  color,
  icon,
  show,
  dismissible,
  animate,
  className,
  children,
} from "../../types/components/alert";
import {
  propTypesVariant,
  propTypesColor,
  propTypesIcon,
  propTypesShow,
  propTypesDismissible,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/alert";

export interface AlertProps extends Omit<MotionProps, "animate"> {
  variant?: variant;
  color?: color;
  icon?: icon;
  show?: show;
  dismissible?: dismissible;
  animate?: animate;
  className?: className;
  children: children;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
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
        findMatch(valid.colors, color, "blue")
      ],
    );
    const classes = twMerge(classnames(alertBase, alertVariant), className);

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

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <NewAnimatePresence>
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
      </NewAnimatePresence>
    );
  },
);

Alert.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  icon: propTypesIcon,
  show: propTypesShow,
  dismissible: propTypesDismissible,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Alert.displayName = "MaterialTailwind.Alert";

export default Alert;
