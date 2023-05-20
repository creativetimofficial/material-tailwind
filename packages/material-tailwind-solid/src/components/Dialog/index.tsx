import { Motion, Presence } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { Show } from "solid-js";
// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { animate, dismiss, handler, open, size } from "../../types/components/dialog";
import type {} from "../../types/generic";

// dialog components
import { createMemo, createUniqueId, mergeProps, splitProps } from "solid-js";
import type { DialogBodyProps } from "./DialogBody";
import { DialogBody } from "./DialogBody";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";

export interface DialogProps {
  open: open;
  handler: handler;
  size?: size;
  dismiss?: dismiss;
  animate?: animate;
}

const Dialog: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & DialogProps> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props

  const mergedProps = mergeProps(() => theme().dialog.defaultProps, { animate: animation }, props);
  const [dialogProps, rest] = splitProps(mergedProps, [
    "open",
    "handler",
    "size",
    "dismiss",
    "animate",
    "class",
  ]);
  const id = createUniqueId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  // 3. set styles
  const cProps = createMemo(() => {
    const {
      valid,
      styles: { base, sizes },
    } = theme().dialog;
    const backdropClasses = classnames(objectsToString(base.backdrop));

    const dialogClasses = twMerge(
      classnames(
        objectsToString(base.container),
        objectsToString(sizes[findMatch(valid.sizes, dialogProps.size, "md")]),
      ),
      dialogProps.class,
    );
    return { backdropClasses, dialogClasses };
  });

  // 7. return
  return (
    <>
      <Presence exitBeforeEnter>
        <Show when={dialogProps.open}>
          <Motion.div
            class={mergedProps.size === "xxl" ? "" : cProps().backdropClasses}
            initial={backdropAnimation.unmount}
            exit={backdropAnimation.unmount}
            animate={mergedProps.open ? backdropAnimation.mount : backdropAnimation.unmount}
            transition={{ duration: 0.2 }}
            onClick={dialogProps.handler}
          >
            <Motion.div
              {...rest}
              class={cProps().dialogClasses}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              initial={mergedProps.animate.initial || mergedProps.animate.unmount}
              exit={mergedProps.animate.unmount}
              animate={mergedProps.open ? mergedProps.animate.mount : mergedProps.animate.unmount}
            >
              {props.children}
            </Motion.div>
          </Motion.div>
        </Show>
      </Presence>
      <Show when={dialogProps.open}>
        <style>{`body { overflow: hidden!important; }`}</style>
      </Show>
    </>
  );
};

export type { DialogBodyProps };
export { Dialog, DialogHeader, DialogBody, DialogFooter };
export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});

const animation = {
  initial: undefined,
  unmount: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
  mount: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const backdropAnimation = {
  unmount: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  mount: {
    opacity: 1,
  },
};
