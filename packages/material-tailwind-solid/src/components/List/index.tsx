// context
import { useTheme } from "../../context/theme";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types

// list components
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps } from "solid-js";
import type { ListItemProps } from "./ListItem";
import { ListItem } from "./ListItem";
import type { ListItemPrefixProps } from "./ListItemPrefix";
import { ListItemPrefix } from "./ListItemPrefix";
import type { ListItemSuffixProps } from "./ListItemSuffix";
import { ListItemSuffix } from "./ListItemSuffix";

export interface ListProps {
  children: JSX.Element;
}

export const List: ParentComponent<JSX.HTMLAttributes<HTMLUListElement> & ListProps> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().list.defaultProps, props);

  // 3. set styles
  const listClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().list.styles.base.list)), mergedProps.class),
  );

  return (
    <ul {...mergedProps} class={listClasses()}>
      {mergedProps.children}
    </ul>
  );
};

export type { ListItemProps, ListItemPrefixProps, ListItemSuffixProps };
export { ListItem, ListItemPrefix, ListItemSuffix };
export default Object.assign(List, {
  Item: ListItem,
  ItemPrefix: ListItemPrefix,
  ItemSuffix: ListItemSuffix,
});
