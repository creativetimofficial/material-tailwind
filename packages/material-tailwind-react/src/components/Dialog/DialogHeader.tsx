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

export interface DialogHeaderProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { dialogHeader } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = dialogHeader;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const dialogHeaderClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogHeaderClasses}>
        {children}
      </div>
    );
  },
);

DialogHeader.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

DialogHeader.displayName = "MaterialTailwind.DialogHeader";

export default DialogHeader;
