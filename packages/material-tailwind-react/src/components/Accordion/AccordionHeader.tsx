import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useAccordion } from "./AccordionContext";
import { useTheme } from "../../context/theme";

// types
import type { className, children } from "../../types/components/accordion";
import { propTypesClassName, propTypesChildren } from "../../types/components/accordion";

export interface AccordionHeaderProps extends React.ComponentProps<"button"> {
  className?: className;
  children: children;
}

export const AccordionHeader = React.forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { open, icon, disabled } = useAccordion();
    const { accordion } = useTheme();
    const {
      styles: { base },
    } = accordion;

    // 2. set default props
    className = className ?? "";

    // 3. set styles
    const buttonStyles = twMerge(
      classnames(objectsToString(base.header.initial), {
        [objectsToString(base.header.active)]: open,
      }),
      className,
    );
    const iconClasses = classnames(objectsToString(base.header.icon));

    // 4. return
    return (
      <button {...rest} ref={ref} type="button" disabled={disabled} className={buttonStyles}>
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
  },
);

AccordionHeader.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

AccordionHeader.displayName = "MaterialTailwind.AccordionHeader";

export default AccordionHeader;
