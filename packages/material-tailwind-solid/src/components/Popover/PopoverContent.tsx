// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { usePopover } from "./PopoverContext";

import { Motion } from "@motionone/solid";
import { Show, createMemo, mergeProps, onCleanup, onMount } from "solid-js";
// types
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";
import type { children } from "../../types/components/popover";

export interface PopoverContentProps {
  children: children;
}

export const PopoverContent: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const context = usePopover();
  const theme = useTheme();
  // 2. set default props
  const mergedProps = mergeProps(
    () => theme().popover.defaultProps,
    { animate: context()?.appliedAnimation },
    props,
  );

  // 3. set styles
  const popoverClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().popover.styles.base)), mergedProps.class),
  );

  onMount(() => {
    //close popover when click outside
    window.addEventListener("click", function (e) {
      if (
        !context()
          ?.floating()
          ?.contains(e.target as Node) &&
        !context()
          ?.reference()
          ?.contains(e.target as Node)
      ) {
        context()?.handler(false);
      }
    });
  });

  onCleanup(() => {
    window.removeEventListener("click", () => undefined);
  });
  const animate = createMemo(() =>
    context()?.open() ? mergedProps.animate.mount : mergedProps.animate.unmount,
  );
  // 6. return
  return (
    <div
      ref={mergeRefs((el) => context()?.setFloating(el), props.ref)}
      style={{
        position: context()?.position?.strategy,
        width: "max-content",
        top: context()?.position?.y + "px" ?? 0,
        left: context()?.position?.x + "px" ?? 0,
        "z-index": 9999,
      }}
      aria-hidden={!context()?.open()}
      data-floating-popover
    >
      <Show when={context()?.open()}>
        <Motion.div
          class={popoverClasses()}
          aria-aria-labelledby={context()?.labelId}
          aria-describedby={context()?.descriptionId}
          initial={mergedProps.animate.unmount}
          exit={mergedProps.animate.unmount}
          animate={animate()}
        >
          {mergedProps.children}
        </Motion.div>
      </Show>
    </div>
  );
};

export default PopoverContent;
