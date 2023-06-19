// context
import { useTheme } from "../../context/theme";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import { createMemo } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";

export const SpeedDialAction: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  const classes = createMemo(() =>
    twMerge(objectsToString(theme().speedDialAction.styles), props.class),
  );
  // 3. return
  return (
    <button {...props} class={classes()}>
      {props.children}
    </button>
  );
};

export default SpeedDialAction;
