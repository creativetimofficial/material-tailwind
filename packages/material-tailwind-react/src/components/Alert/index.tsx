import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, motion, MotionProps } from "framer-motion";

// @heroicons
import { XMarkIcon } from "@heroicons/react/24/outline";

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
  open,
  action,
  animate,
  className,
  children,
  onClose,
} from "../../types/components/alert";
import {
  propTypesVariant,
  propTypesColor,
  propTypesIcon,
  propTypesOpen,
  propTypesAction,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
  propTypesOnClose,
} from "../../types/components/alert";

export interface AlertProps extends Omit<MotionProps, "animate"> {
  variant?: variant;
  color?: color;
  icon?: icon;
  open?: open;
  onClose?: onClose;
  action?: action;
  animate?: animate;
  className?: className;
  children: children;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, color, icon, open, action, onClose, animate, className, children, ...rest }, ref) => {
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
    open = open ?? defaultProps.open;
    action = action ?? defaultProps.action;
    onClose = onClose ?? defaultProps.onClose;

    // 3. set styles
    const alertBase = objectsToString(base.alert);
    const alertAction = objectsToString(base.action);
    const alertVariant = objectsToString(
      variants.alert[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "blue")
      ],
    );
    const actionVariant = objectsToString(
      variants.action[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "blue")
      ],
    );
    const classes = twMerge(classnames(alertBase, alertVariant), className);
    const actionClasses = classnames(alertAction, actionVariant);

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

    // // 5. icon template
    const iconTemplate = <div className="shrink-0">{icon}</div>;

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <NewAnimatePresence>
        {open && (
          <motion.div
            {...rest}
            ref={ref}
            role="alert"
            className={`${classes} flex`}
            initial="unmount"
            exit="unmount"
            animate={open ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {icon && iconTemplate}
            <div className={`${icon ? "ml-3" : ""} mr-12`}>{children}</div>
            {onClose && !action && (
              <div
                role="button"
                onClick={onClose}
                className={actionClasses}
                onMouseDown={(e) => rippleEffect.create(e, "light")}
              >
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              </div>
            )}
            {action || null}
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
  open: propTypesOpen,
  action: propTypesAction,
  onClose: propTypesOnClose,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Alert.displayName = "MaterialTailwind.Alert";

export default Alert;
