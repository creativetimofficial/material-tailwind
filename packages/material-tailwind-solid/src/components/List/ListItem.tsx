// context
import { useTheme } from "../../context/theme";

// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import type { disabled, ripple, selected } from "../../types/components/list";

// list item components
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps } from "solid-js";
import type { ListItemPrefixProps } from "./ListItemPrefix";
import { ListItemPrefix } from "./ListItemPrefix";
import type { ListItemSuffixProps } from "./ListItemSuffix";
import { ListItemSuffix } from "./ListItemSuffix";

export interface ListItemProps {
  disabled?: disabled;
  selected?: selected;
  ripple?: ripple;
  children: JSX.Element;
}

export const ListItem: ParentComponent<JSX.HTMLAttributes<HTMLLIElement> & ListItemProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().list.defaultProps, props);

  const cProps = createMemo(() => {
    const {
      styles: { base },
    } = theme().list;
    // 3. set ripple effect instance
    const rippleEffect = mergedProps.ripple !== undefined && new Ripple();

    // 4. set styles
    const listItemClasses = twMerge(
      classnames(objectsToString(base.item.initial), {
        [objectsToString(base.item.disabled)]: mergedProps.disabled,
        [objectsToString(base.item.selected)]: mergedProps.selected && !mergedProps.disabled,
      }),
      mergedProps.class,
    );
    return { listItemClasses, rippleEffect };
  });
  return (
    <li
      {...mergedProps}
      role="button"
      tabIndex={0}
      class={cProps().listItemClasses}
      onMouseDown={(e) => {
        const onMouseDown = mergedProps?.onMouseDown;
        if (mergedProps.ripple) cProps().rippleEffect.create(e, "dark");
        return typeof onMouseDown === "function" && onMouseDown(e);
      }}
    >
      {mergedProps.children}
    </li>
  );
};

export type { ListItemPrefixProps, ListItemSuffixProps };
export { ListItemPrefix, ListItemSuffix };
export default Object.assign(ListItem, { Prefix: ListItemPrefix, Suffix: ListItemSuffix });
