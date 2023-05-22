// context
import { useTheme } from "../../context/theme";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo } from "solid-js";

export interface ListItemPrefixProps {
  children: JSX.Element;
}

export const ListItemPrefix: ParentComponent<
  JSX.HTMLAttributes<HTMLDivElement> & ListItemPrefixProps
> = (props) => {
  // 1. init
  const theme = useTheme();

  // 3. set styles
  const listItemPrefixClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().list.styles.base.itemPrefix)), props.class),
  );

  return (
    <div {...props} class={listItemPrefixClasses()}>
      {props.children}
    </div>
  );
};

export default ListItemPrefix;
