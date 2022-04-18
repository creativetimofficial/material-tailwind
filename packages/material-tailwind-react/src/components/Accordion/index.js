import { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { AccordionContextProvider } from "components/Accordion/AccordionContext";
import { useTheme } from "context/theme";

// accordion components
import AccordionHeader from "components/Accordion/AccordionHeader";
import AccordionBody from "components/Accordion/AccordionBody";

const Accordion = forwardRef(
  ({ open, icon, animate, className, disabled, children, ...rest }, ref) => {
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
    disabled = disabled ?? defaultProps.disabled;

    // 3. set styles
    const accordionClasses = classnames(
      objectsToString(base.container),
      { [objectsToString(base.disabled)]: disabled },
      className,
    );

    // 4. memoize context value
    const contextValue = useMemo(() => ({ open, icon, animate }), [open, icon, animate]);

    // 5. return
    return (
      <AccordionContextProvider value={contextValue}>
        <div {...rest} ref={ref} className={accordionClasses} disabled={disabled}>
          {children}
        </div>
      </AccordionContextProvider>
    );
  },
);

Accordion.propTypes = {
  open: PropTypes.bool.isRequired,
  icon: PropTypes.node,
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Accordion.displayName = "Accordion";

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export { Accordion, AccordionHeader, AccordionBody };
export default Accordion;
