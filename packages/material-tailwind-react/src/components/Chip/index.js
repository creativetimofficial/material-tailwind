import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Ripple from "material-ripple-effects";
import merge from "deepmerge";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const Chip = forwardRef(
  ({ variant, color, icon, show, dismissible, animate, className, value, ...rest }, ref) => {
    // 1. init
    const { chip } = useContext(MaterialTailwindTheme);
    const { defaultProps, valid } = chip;
    const { base, variants, closeButtonColor } = chip.styles;
    const rippleEffect = new Ripple();

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = className ?? defaultProps.className;
    animate = animate ?? defaultProps.animate;
    show = show ?? defaultProps.show;

    // 3. set styles
    const chipVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "light-blue")
      ],
    );
    const chipCloseButton = objectsToString(
      closeButtonColor[findMatch(valid.colors, color, "light-blue")],
    );
    const classes = classnames(objectsToString(base), chipVariant, className);
    const chipCloseButtonClasses = classnames(
      "absolute top-1 right-1 mt-[0.5px] mx-px w-max rounded",
      chipCloseButton,
      "transition-colors",
    );

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
    const iconTemplate = (
      <div className="w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4">{icon}</div>
    );

    // 6. return
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          className={classes}
          initial="unmount"
          exit="unmount"
          animate={show ? "mount" : "unmount"}
          variants={appliedAnimation}
          {...rest}
        >
          {icon && iconTemplate}
          <div className={`${icon ? "ml-4" : ""} ${dismissible ? "mr-5" : ""} mt-px`}>{value}</div>
          {dismissible && (
            <div className={chipCloseButtonClasses}>
              <div
                role="button"
                tabIndex={0}
                onClick={dismissible.onClose}
                onKeyPress={() => null}
                onMouseDown={(e) => !dismissible.action && rippleEffect.create(e, "light")}
                className={`w-5 h-5 ${dismissible.action ? "" : "p-1 rounded"}`}
              >
                {dismissible.action || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  },
);

Chip.propTypes = {
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
    transition: PropTypes.instanceOf(Object),
    state: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Chip.displayName = "Chip";

export default Chip;
