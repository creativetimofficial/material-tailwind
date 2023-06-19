// framer-motion

// @floating-ui

// context
import { useTheme } from "../../context/theme";
import { useSpeedDial } from "./SpeedDialContext";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import { Motion, Presence } from "@motionone/solid";
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";
import { For, Show, children, createMemo, splitProps } from "solid-js";

export const SpeedDialContent: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();
  const context = useSpeedDial();

  const [dialProps, rest] = splitProps(props, ["class", "children"]);

  // 2. set styles
  const classes = createMemo(() =>
    twMerge(
      objectsToString(() => theme().speedDialContent.styles),
      dialProps?.class,
    ),
  );
  // 3. Memo animation to prevent warning due to lost context after unmount of Motion.div
  const animate = createMemo(() =>
    context()?.open() ? context()?.animation.mount : context()?.animation.unmount,
  );
  const getChildren = children(() => dialProps.children);
  // 4. return
  return (
    <div
      {...rest}
      ref={mergeRefs(props.ref, (el) => context()?.setFloating(el))}
      class={classes()}
      style={{
        position: context()?.position.strategy,
        top: context()?.position.y + "px" ?? 0,
        left: context()?.position.x + "px" ?? 0,
        display:
          context()?.position.placement.includes("right") ||
          context()?.position.placement.includes("left")
            ? "flex"
            : "block",
      }}
    >
      <For each={getChildren.toArray()}>
        {(child) => (
          <Presence exitBeforeEnter>
            <Show when={context()?.open()}>
              <Motion.div
                initial={context()?.animation.unmount}
                exit={context()?.animation.unmount}
                animate={animate()}
              >
                {child}
              </Motion.div>
            </Show>
          </Presence>
        )}
      </For>
    </div>
  );
};

export default SpeedDialContent;
