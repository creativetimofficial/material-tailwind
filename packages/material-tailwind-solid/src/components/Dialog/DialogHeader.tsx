// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import type { ParentComponent, JSX } from "solid-js";
import { createMemo } from "solid-js";

// types

export const DialogHeader: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();
  const dialogHeaderClasses = createMemo(() => {
    const {
      styles: { base },
    } = theme().dialogHeader;
    return twMerge(
      classnames(objectsToString(base)),
      theme().dialogHeader.defaultProps.class,
      props.class,
    );
  });

  // 4. return
  return (
    <div {...props} class={dialogHeaderClasses()}>
      {props.children}
    </div>
  );
};

export default DialogHeader;
