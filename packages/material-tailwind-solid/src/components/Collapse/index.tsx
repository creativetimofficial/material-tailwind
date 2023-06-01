// framer-motion components

// @floating-ui

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { MotionProxy, Variant } from "@motionone/solid";
import { Motion } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps } from "solid-js";
import type { animate, open } from "../../types/components/collapse";
import { deepmerge } from "deepmerge-ts";

export interface CollapseProps extends Partial<Omit<MotionProxy, "animate">> {
  open: open;
  animate?: animate;
}

export const Collapse: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & CollapseProps> = (
  props,
) => {
  // 1. init
  let contentRef!: HTMLDivElement;
  const theme = useTheme();

  const mainAnimation: Record<string, Variant> = {
    unmount: {
      transition: { duration: 0.3, easing: [0.4, 0, 0.2, 1] },
    },
    mount: {
      transition: { duration: 0.3, easing: [0.4, 0, 0.2, 1] },
    },
  };

  // 2. set default props
  const mergedProps = mergeProps(
    () => theme().collapse.defaultProps,
    { animate: mainAnimation },

    props,
  );

  // 3. set styles
  const classes = createMemo(() =>
    twMerge(classnames(objectsToString(theme().collapse.styles.base)), mergedProps.class),
  );

  const animate = createMemo(() => {
    return deepmerge(mergedProps.animate.mount, {
      height: mergedProps.open ? contentRef?.clientHeight + "px" : "0px",
    });
  });

  // 6. return
  return (
    <Motion.div
      {...mergedProps}
      class={classes()}
      initial={mergedProps.animate.initial || mergedProps.animate.unmount}
      exit={mergedProps.animate.unmount}
      animate={animate()}
    >
      <div ref={contentRef}>{mergedProps.children}</div>
    </Motion.div>
  );
};

export default Collapse;
