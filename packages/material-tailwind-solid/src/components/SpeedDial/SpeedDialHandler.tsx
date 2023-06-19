// @floating-ui

// context
import { useSpeedDial } from "./SpeedDialContext";

// utils
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";

// type

export const SpeedDialHandler: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const context = useSpeedDial();
  const handleMouseEnter = (
    e: MouseEvent & {
      currentTarget: HTMLDivElement;
      target: Element;
    },
  ) => {
    const onMouseEnter = props.onMouseEnter;
    // if (!("ontouchstart" in window)) context()?.handler(true);
    context()?.handler(true);
    if (typeof onMouseEnter === "function") onMouseEnter(e);
  };

  // 2. return
  return (
    <div
      {...props}
      onMouseEnter={handleMouseEnter}
      ref={mergeRefs((el) => context()?.setReference(el), props?.ref)}
    >
      {props.children}
    </div>
  );
};

export default SpeedDialHandler;
