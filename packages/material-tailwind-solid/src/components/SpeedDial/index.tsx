// context
import { useTheme } from "../../context/theme";
// types
import type {
  animate,
  dismiss,
  handler,
  offset,
  open,
  placement,
} from "../../types/components/speedDial";

// components
import { autoUpdate, flip, offset as fuiOffset, shift } from "@floating-ui/dom";
import { useFloating } from "solid-floating-ui";
import type { JSX, ParentComponent } from "solid-js";
import {
  onCleanup,
  onMount,
  createEffect,
  splitProps,
  createMemo,
  createSignal,
  mergeProps,
} from "solid-js";
import { mergeRefs } from "@solid-primitives/refs";

import SpeedDialAction from "./SpeedDialAction";
import SpeedDialContent from "./SpeedDialContent";
import SpeedDialHandler from "./SpeedDialHandler";
import { SpeedDialContext, useSpeedDial } from "./SpeedDialContext";

export interface SpeedDialProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
}

const SpeedDial: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & SpeedDialProps> = (props) => {
  // 1. init
  const theme = useTheme();
  const [internalOpen, setInternalOpen] = createSignal(false);

  // 3. set animation
  const animation = {
    unmount: {
      opacity: 0,
      transform: "scale(0.5)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      transform: "scale(1)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
  };
  const mergedProps = mergeProps(
    () => theme().speedDial.defaultProps,
    { animate: animation },
    props,
  );
  const [internalProps, rest] = splitProps(mergedProps, [
    "open",
    "handler",
    "placement",
    "offset",
    "dismiss",
    "animate",
  ]);
  // 4. set floating ui
  const [reference, setReference] = createSignal<HTMLDivElement>();
  const [floating, setFloating] = createSignal<HTMLDivElement>();
  const position = useFloating(reference, floating, {
    placement: internalProps.placement,
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), fuiOffset(internalProps.offset)],
  });

  // 5. build context
  const open = createMemo(() => internalProps.open ?? internalOpen());
  const handler = createMemo(() => internalProps.handler ?? setInternalOpen);
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement>();

  const ctx = createMemo(() => ({
    position,
    open,
    rootRef: containerRef,
    setFloating,
    setReference,
    handler: handler(),
    animation: internalProps.animate,
  }));
  // 6. Close on mouse move outside
  let moveOutsideRef!: HTMLDivElement;
  onMount(() => {
    //close  menu when click outside
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        ctx().handler(false);
      }
    });
    window.addEventListener("mousemove", function (e) {
      if (!ctx()?.open() || !dimensions()?.width) return e;
      const outsideLeft = e.clientX <= moveOutsideRef.getBoundingClientRect().left - 3;
      const outsideRight = e.clientX >= moveOutsideRef.getBoundingClientRect().right + 3;
      const outsideTop = e.clientY <= moveOutsideRef.getBoundingClientRect().top - 3;
      const outsideBottom = e.clientY >= moveOutsideRef.getBoundingClientRect().bottom + 3;

      if (
        //Mouse outside then close
        outsideLeft ||
        outsideRight ||
        outsideTop ||
        outsideBottom
      ) {
        setDimensions(undefined);
        ctx().handler(false);
      }
    });
  });
  onCleanup(() => {
    window.removeEventListener("mousemove", () => undefined);
    window.removeEventListener("keydown", () => undefined);
  });
  const [dimensions, setDimensions] = createSignal<{
    left: number;
    top: number;
    width: number;
    height: number;
  }>();
  createEffect(() => {
    if (!ctx().open() || !floating() || !containerRef()) return setDimensions(undefined);

    const floatingRect = () => floating()!.getBoundingClientRect();
    const containerRect = () => reference()!.getBoundingClientRect();
    const offsetX =
      typeof mergedProps.offset === "number"
        ? mergedProps.offset
        : mergedProps.offset.mainAxis || 0;
    const offsetY =
      typeof mergedProps.offset === "number"
        ? mergedProps.offset
        : mergedProps.offset.crossAxis || 0;

    const top = Math.min(floatingRect().top, position.y || 10000, containerRect().top);
    const left = Math.min(floatingRect().left, position.x || 10000, containerRect().left);
    const width =
      position.placement.includes("left") || position.placement.includes("right")
        ? Math.max(floatingRect().width + containerRect().width + offsetX)
        : Math.max(floatingRect().width, containerRect().width);
    const height =
      position.placement.includes("top") || position.placement.includes("bottom")
        ? Math.max(floatingRect().height + containerRect().height + offsetY)
        : Math.max(floatingRect().height, containerRect().height);

    setDimensions({
      top,
      left,
      width,
      height,
    });
  });

  // 7. return
  return (
    <>
      <div
        style={{
          left: dimensions()?.left + "px",
          top: dimensions()?.top + "px",
          width: dimensions()?.width + "px",
          height: dimensions()?.height + "px",
          position: "absolute",
        }}
        ref={(el) => (moveOutsideRef = el)}
      />
      <SpeedDialContext.Provider value={ctx}>
        <div class="group" ref={mergeRefs((el) => setContainerRef(el), props.ref)} {...rest}>
          {mergedProps.children}
        </div>
      </SpeedDialContext.Provider>
    </>
  );
};

export { SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction, useSpeedDial };
export default Object.assign(SpeedDial, {
  Handler: SpeedDialHandler,
  Content: SpeedDialContent,
  Action: SpeedDialAction,
});
