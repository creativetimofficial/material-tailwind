import { forwardRef, useRef } from "react";
import PropTypes from "prop-types";

// framer-motion
import { motion } from "framer-motion";

// utils
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "utils/objectsToString";

// context
import { useAccordion } from "components/Accordion/AccordionContext";
import { useTheme } from "context/theme";

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

export default AccordionBody;
