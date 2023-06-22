// @floating-ui

// framer-motion

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import { autoUpdate, flip, offset as fuiOffset, shift } from "@floating-ui/dom";
import { Motion } from "@motionone/solid";
import { useFloating } from "solid-floating-ui";
import type { JSX, JSXElement, ParentComponent } from "solid-js";
import { Show, createMemo, createSignal, mergeProps, splitProps } from "solid-js";
import type {
  animate,
  content,
  dismiss,
  handler,
  interactive,
  offset,
  open,
  placement,
} from "../../types/components/popover";

export interface TooltipProps {
  open?: open;
  handler?: handler;
  content?: content;
  interactive?: interactive;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  children: JSXElement;
}

export const Tooltip: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & TooltipProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  const [internalOpen, setInternalOpen] = createSignal(false);
  const [reference, setReference] = createSignal<HTMLElement>();
  const [floating, setFloating] = createSignal<HTMLElement>();

  // 2. set animation
  const defaultAnimation = {
    unmount: {
      opacity: 0,
    },
    mount: {
      opacity: 1,
    },
  };

  // 3. set default props
  const mergedProps = mergeProps(
    () => theme().popover.defaultProps,
    { animate: defaultAnimation, handler: setInternalOpen, open: internalOpen },
    props,
  );

  const [tooltipProps, rest] = splitProps(mergedProps, [
    "open",
    "handler",
    "content",
    "interactive",
    "placement",
    "offset",
    "dismiss",
    "animate",
    "children",
    "class",
  ]);

  // 4. set styles
  const styles = createMemo(() => {
    const {
      styles: { base },
    } = theme().tooltip;
    const tooltipClasses = twMerge(classnames(objectsToString(base)), tooltipProps.class);
    return { tooltipClasses };
  });

  // 5. set @floating-ui
  const position = useFloating(reference, floating, {
    placement: mergedProps.placement,
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), fuiOffset(mergedProps.offset)],
  });

  // 6. Create an instance of AnimatePresence because of the types issue with the children
  const animate = createMemo(() =>
    tooltipProps.open() ? mergedProps.animate.mount : mergedProps.animate.unmount,
  );

  // 7. return
  return (
    <>
      <span
        ref={setReference}
        onMouseEnter={() => tooltipProps.handler(true)}
        onMouseLeave={() => tooltipProps.handler(false)}
        //toDo add Close on keydown
      >
        {tooltipProps.children}
      </span>

      <Show when={tooltipProps.open()}>
        <Motion.div
          {...rest}
          ref={setFloating}
          style={{
            position: position?.strategy,
            width: "max-content",
            top: position?.y + "px" ?? 0,
            left: position?.x + "px" ?? 0,
            "z-index": 9999,
          }}
          class={styles().tooltipClasses}
          initial={tooltipProps.animate.unmount}
          exit={tooltipProps.animate.unmount}
          animate={animate()}
        >
          {tooltipProps.content}
        </Motion.div>
      </Show>
    </>
  );
};
export default Tooltip;
