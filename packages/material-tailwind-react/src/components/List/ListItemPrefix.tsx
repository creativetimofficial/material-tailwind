import React from "react";

// context
import { useTheme } from "../../context/theme";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import type { className, children } from "../../types/components/list";
import { propTypesClassName, propTypesChildren } from "../../types/components/list";

export interface ListItemPrefixProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const ListItemPrefix = React.forwardRef<HTMLDivElement, ListItemPrefixProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { list } = useTheme();
    const {
      styles: { base },
    } = list;

    // 3. set styles
    const listItemPrefixClasses = twMerge(
      classnames(objectsToString(base.itemPrefix)),
      className,
    );

    return (
      <div {...rest} ref={ref} className={listItemPrefixClasses}>
        {children}
      </div>
    );
  },
);

ListItemPrefix.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

ListItemPrefix.displayName = "MaterialTailwind.ListItemPrefix";

export default ListItemPrefix;
