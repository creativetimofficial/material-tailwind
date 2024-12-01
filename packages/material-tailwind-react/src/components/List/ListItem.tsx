import React from "react";

// context
import { useTheme } from "../../context/theme";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import type { className, disabled, children, selected, ripple } from "../../types/components/list";
import {
  propTypesClassName,
  propTypesDisabled,
  propTypesRipple,
  propTypesSelected,
  propTypesChildren,
} from "../../types/components/list";

// list item components
import { ListItemPrefix, ListItemPrefixProps } from "./ListItemPrefix";
import { ListItemSuffix, ListItemSuffixProps } from "./ListItemSuffix";

export interface ListItemProps extends React.ComponentProps<"div"> {
  className?: className;
  disabled?: disabled;
  selected?: selected;
  ripple?: ripple;
  children: children;
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, disabled, selected, ripple, children, ...rest }, ref) => {
    // 1. init
    const { list } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = list;

    // 2. set default props
    ripple = ripple ?? defaultProps.ripple;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const listItemClasses = twMerge(
      classnames(objectsToString(base.item.initial), {
        [objectsToString(base.item.disabled)]: disabled,
        [objectsToString(base.item.selected)]: selected && !disabled,
      }),
      className,
    );

    return (
      <div
        {...rest}
        ref={ref}
        role="button"
        tabIndex={0}
        className={listItemClasses}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown;
          if (ripple) rippleEffect.create(e, "dark");
          return typeof onMouseDown === "function" && onMouseDown(e);
        }}
      >
        {children}
      </div>
    );
  },
);

ListItem.propTypes = {
  className: propTypesClassName,
  selected: propTypesSelected,
  disabled: propTypesDisabled,
  ripple: propTypesRipple,
  children: propTypesChildren,
};

ListItem.displayName = "MaterialTailwind.ListItem";

export type { ListItemPrefixProps, ListItemSuffixProps };
export { ListItemPrefix, ListItemSuffix };
export default Object.assign(ListItem, { Prefix: ListItemPrefix, Suffix: ListItemSuffix });
