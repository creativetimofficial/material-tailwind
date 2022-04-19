import { forwardRef } from "react";
import PropTypes from "prop-types";

// framer-motion
import { motion, AnimatePresence } from "framer-motion";

// utils
import merge from "deepmerge";
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";
import { useTabs } from "components/Tabs/TabsContext";

const TabPanel = forwardRef(({ value, animate, className, children, ...rest }, ref) => {
  // 1. init
  const { tabPanel } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = tabPanel;
  const [active] = useTabs();

  // 2. set default props
  className = className ?? defaultProps.className;
  animate = animate ?? defaultProps.animate;

  // 3. set styles
  const tabPanelClasses = classnames(objectsToString(base), className);

  // 4. set animation
  const mainAnimation = {
    unmount: {
      opacity: 0,
      position: "absolute",
      top: "0",
      left: "0",
      transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
    },
  };
  const appliedAnimation = merge(mainAnimation, animate);

  // 5. return
  return (
    <AnimatePresence exitBeforeEnter>
      {active === value && (
        <motion.div
          {...rest}
          ref={ref}
          role="tabpanel"
          className={tabPanelClasses}
          initial="unmount"
          exit="unmount"
          animate={active === value ? "mount" : "unmount"}
          variants={appliedAnimation}
          data-value={value}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TabPanel.displayName = "TabPanel";

export default TabPanel;
