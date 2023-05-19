// utils
import classnames from "classnames";
import { createMemo } from "solid-js";

import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
// types
import type { ParentComponent, JSX } from "solid-js";

export const DialogFooter: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props

  // 3. set styles
  const dialogFooterClasses = createMemo(() => {
    const {
      styles: { base },
    } = theme().dialogFooter;
    return twMerge(
      classnames(objectsToString(base)),
      theme().dialogFooter.defaultProps.class,
      props.class,
    );
  });

  // 4. return
  return (
    <div {...props} class={dialogFooterClasses()}>
      {props.children}
    </div>
  );
};
export default DialogFooter;
