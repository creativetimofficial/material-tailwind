import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { divider, className, children } from "../../types/components/dialog";
import {
  propTypesDivider,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/dialog";

export interface DialogBodyProps extends React.ComponentProps<"div"> {
  divider?: divider;
  className?: className;
  children: children;
}

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ divider, className, children, ...rest }, ref) => {
    // 1. init
    const { dialogBody } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = dialogBody;

    // 2. set default props
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const dialogBodyClasses = twMerge(
      classnames(objectsToString(base.initial), { [objectsToString(base.divider)]: divider }),
      className,
    );

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogBodyClasses}>
        {children}
      </div>
    );
  },
);

DialogBody.propTypes = {
  divider: propTypesDivider,
  className: propTypesClassName,
  children: propTypesChildren,
};

DialogBody.displayName = "MaterialTailwind.DialogBody";

export default DialogBody;
