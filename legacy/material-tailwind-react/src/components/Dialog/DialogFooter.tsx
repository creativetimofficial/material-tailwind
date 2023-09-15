import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { className, children } from "../../types/components/dialog";
import { propTypesClassName, propTypesChildren } from "../../types/components/dialog";

export interface DialogFooterProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { dialogFooter } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = dialogFooter;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const dialogFooterClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogFooterClasses}>
        {children}
      </div>
    );
  },
);

DialogFooter.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

DialogFooter.displayName = "MaterialTailwind.DialogFooter";

export default DialogFooter;
