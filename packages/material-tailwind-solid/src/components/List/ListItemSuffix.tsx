// context
import { useTheme } from "../../context/theme";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo } from "solid-js";

export interface ListItemSuffixProps {
  children: JSX.Element;
}

export const ListItemSuffix: ParentComponent<
  JSX.HTMLAttributes<HTMLDivElement> & ListItemSuffixProps
> = (props) => {
  // 1. init
  const theme = useTheme();

  // 3. set styles
  const listItemSuffixClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().list.styles.base.itemSuffix)), props.class),
  );

  return (
    <div {...props} class={listItemSuffixClasses()}>
      {props.children}
    </div>
  );
};

export default ListItemSuffix;
