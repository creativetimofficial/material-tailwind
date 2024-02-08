import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, m, MotionProps, LazyMotion, domAnimation } from "framer-motion";

// utils
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
  onClose,
  action,
  animate,
  className,
  value,
  size,
} from "../../types/components/chip";
import {
  propTypesVariant,
  propTypesColor,
  propTypesIcon,
  propTypesOpen,
  propTypesOnClose,
  propTypesAction,
  propTypesAnimate,
  propTypesClassName,
  propTypesValue,
  propTypesSize,
} from "../../types/components/chip";
import IconButton from "../IconButton";

export interface ChipProps extends Omit<MotionProps, "animate"> {
  variant?: variant;
  size?: size;
  color?: color;
  icon?: icon;
  open?: open;
  onClose?: onClose;
  action?: action;
  animate?: animate;
  className?: className;
  value: value;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    { variant, size, color, icon, open, onClose, action, animate, className, value, ...rest },
    ref,
  ) => {
    // 1. init
    const { chip } = useTheme();
    const { defaultProps, valid, styles } = chip;
    const { base, variants, sizes } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    animate = animate ?? defaultProps.animate;
    open = open ?? defaultProps.open;
    action = action ?? defaultProps.action;
    onClose = onClose ?? defaultProps.onClose;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const chipBase = objectsToString(base.chip);
    const chipAction = objectsToString(base.action);
    const chipIcon = objectsToString(base.icon);
    const chipVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "gray")
      ],
    );
    const chipSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["chip"]);
    const actionSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["action"]);
    const iconSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["icon"]);
    const classes = twMerge(classnames(chipBase, chipVariant, chipSize), className);
    const actionClasses = classnames(chipAction, actionSize);
    const iconClasses = classnames(chipIcon, iconSize);
    const contentClasses = classnames({
      "ml-4": icon && size === "sm",
      "ml-[18px]": icon && size === "md",
      "ml-5": icon && size === "lg",
      "mr-5": onClose,
    });

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
    const iconTemplate = <div className={iconClasses}>{icon}</div>;

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <LazyMotion features={domAnimation}>
        <NewAnimatePresence>
          {open && (
            <m.div
              {...rest}
              ref={ref}
              className={classes}
              initial="unmount"
              exit="unmount"
              animate={open ? "mount" : "unmount"}
              variants={appliedAnimation}
            >
              {icon && iconTemplate}
              <span className={contentClasses}>{value}</span>
              {onClose && !action && (
                <IconButton
                  onClick={onClose}
                  size="sm"
                  variant="text"
                  color={variant === "outlined" || variant === "ghost" ? color : "white"}
                  className={actionClasses}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={classnames({
                      "h-3.5 w-3.5": size === "sm",
                      "h-4 w-4": size === "md",
                      "h-5 w-5": size === "lg",
                    })}
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </IconButton>
              )}
              {action || null}
            </m.div>
          )}
        </NewAnimatePresence>
      </LazyMotion>
    );
  },
);

Chip.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  icon: propTypesIcon,
  open: propTypesOpen,
  onClose: propTypesOnClose,
  action: propTypesAction,
  animate: propTypesAnimate,
  className: propTypesClassName,
  value: propTypesValue,
};

Chip.displayName = "MaterialTailwind.Chip";

export default Chip;
