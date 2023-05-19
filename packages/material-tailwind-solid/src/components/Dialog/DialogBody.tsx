// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { divider } from "../../types/components/dialog";
import type { ParentComponent, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";

export interface DialogBodyProps {
  divider?: divider;
}

export const DialogBody: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & DialogBodyProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  const [divider, rest] = splitProps(props, ["divider"]);
  // 2. set default props

  // 3. set styles
  const dialogBodyClasses = createMemo(() => {
    const {
      styles: { base },
    } = theme().dialogBody;
    return twMerge(
      classnames(objectsToString(base.initial), { [objectsToString(base.divider)]: divider }),
      theme().dialogBody.defaultProps.class,
      props.class,
    );
  });

  // 4. return
  return (
    <div {...rest} class={dialogBodyClasses()}>
      {props.children}
    </div>
  );
};

export default DialogBody;
