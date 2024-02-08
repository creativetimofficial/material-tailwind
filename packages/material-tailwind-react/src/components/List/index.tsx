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

// list components
import { ListItem, ListItemProps } from "./ListItem";
import { ListItemPrefix, ListItemPrefixProps } from "./ListItemPrefix";
import { ListItemSuffix, ListItemSuffixProps } from "./ListItemSuffix";

export interface ListProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { list } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = list;

    // 2. set default props
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const listClasses = twMerge(classnames(objectsToString(base.list)), className);

    return (
      <nav {...rest} ref={ref} className={listClasses}>
        {children}
      </nav>
    );
  },
);

List.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

List.displayName = "MaterialTailwind.List";

export type { ListItemProps, ListItemPrefixProps, ListItemSuffixProps };
export { ListItem, ListItemPrefix, ListItemSuffix };
export default Object.assign(List, {
  Item: ListItem,
  ItemPrefix: ListItemPrefix,
  ItemSuffix: ListItemSuffix,
});
