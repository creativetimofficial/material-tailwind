import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { AccordionContextProvider, useAccordion } from "./AccordionContext";

// types
import type {
  open,
  icon,
  animate,
  disabled,
  className,
  children,
} from "../../types/components/accordion";
import {
  propTypesOpen,
  propTypesIcon,
  propTypesAnimate,
  propTypesDisabled,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/accordion";

// accordion components
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

export interface AccordionProps extends React.ComponentProps<"div"> {
  open: open;
  icon?: icon;
  animate?: animate;
  disabled?: disabled;
  className?: className;
  children: children;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
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
    const contextValue = React.useMemo(() => ({ open, icon, animate }), [open, icon, animate]);

    // 5. return
    return (
      <AccordionContextProvider value={contextValue}>
        <div {...rest} ref={ref} className={accordionClasses}>
          {children}
        </div>
      </AccordionContextProvider>
    );
  },
);

Accordion.propTypes = {
  open: propTypesOpen,
  icon: propTypesIcon,
  animate: propTypesAnimate,
  disabled: propTypesDisabled,
  className: propTypesClassName,
  children: propTypesChildren,
};

Accordion.displayName = "MaterialTailwind.Accordion";

export { Accordion, AccordionHeader, AccordionBody, useAccordion };
export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Body: AccordionBody,
});
