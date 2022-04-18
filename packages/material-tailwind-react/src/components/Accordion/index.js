import { createContext, useContext, forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

const AccordionContext = createContext(null);
AccordionContext.displayName = "AccordionContextProvider";

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within an Accordion.");
  }

  return context;
}

const AccordionHeader = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { open, icon } = useAccordion();
  const { accordion } = useTheme();
  const {
    styles: { base },
  } = accordion;

  // 2. set default props
  className = className ?? "";

  // 3. set styles
  const buttonStyles = classnames(
    objectsToString(base.header.button),
    { [objectsToString(base.header.active)]: open },
    className,
  );
  const iconClasses = classnames(objectsToString(base.header.icon));

  // 4. return
  return (
    <button {...rest} ref={ref} type="button" className={buttonStyles}>
      {children}
      <span className={iconClasses}>
        {icon ??
          (open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          ))}
      </span>
    </button>
  );
});

AccordionHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AccordionHeader.displayName = "AccordionHeader";

const AccordionBody = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { open, animate } = useAccordion();
  const { accordion } = useTheme();
  const {
    styles: { base },
  } = accordion;

  const bodyEl = useRef(null);

  // 2. set default props
  className = className ?? "";

  // 3. set styles
  const bodyClasses = classnames(objectsToString(base.body), className);

  // 4. set animation
  const heightAnimation = {
    unmount: {
      height: "0px",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      height: `${bodyEl.current?.scrollHeight}px`,
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
  };

  const mainAnimation = {
    unmount: {
      opacity: 0,
      transition: { duration: 0.3, ease: "linear" },
    },
    mount: {
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  const appliedAnimation = merge(mainAnimation, animate);

  // 5. return
  return (
    <motion.div
      className="overflow-hidden"
      ref={bodyEl}
      initial="unmount"
      exit="unmount"
      animate={open ? "mount" : "unmount"}
      variants={heightAnimation}
    >
      <motion.div
        {...rest}
        ref={ref}
        className={bodyClasses}
        initial="unmount"
        exit="unmount"
        animate={open ? "mount" : "unmount"}
        variants={appliedAnimation}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

AccordionBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AccordionBody.displayName = "AccordionBody";

const Accordion = forwardRef(({ open, icon, animate, className, children, ...rest }, ref) => {
  // 1. init
  const { accordion } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = accordion;

  // 2. set default props
  icon = icon ?? defaultProps.icon;
  animate = animate ?? defaultProps.animate;
  className = className ?? defaultProps.className;

  // 3. set styles
  const accordionClasses = classnames(objectsToString(base.container), className);

  // 4. memoize context value
  const contextValue = useMemo(() => ({ open, icon, animate }), [open, icon, animate]);

  // 5. return
  return (
    <AccordionContext.Provider value={contextValue}>
      <div {...rest} ref={ref} className={accordionClasses}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

Accordion.propTypes = {
  open: PropTypes.bool.isRequired,
  icon: PropTypes.node,
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Accordion.displayName = "Accordion";

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export { Accordion, AccordionHeader, AccordionBody };
export default Accordion;
