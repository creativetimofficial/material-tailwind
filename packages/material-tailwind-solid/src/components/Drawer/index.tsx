// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import { Motion, Presence } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
import type {
  dismiss,
  onClose,
  open,
  overlay,
  overlayProps,
  overlayRef,
  placement,
  size,
  transition,
} from "../../types/components/drawer";

export interface DrawerProps {
  open: open;
  size?: size;
  overlay?: overlay;
  placement?: placement;
  overlayProps?: overlayProps;
  onClose?: onClose;
  dismiss?: dismiss;
  transition?: transition;
  overlayRef?: overlayRef;
}

export const Drawer: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & DrawerProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  const mergedProps = mergeProps(() => theme().drawer.defaultProps, props);

  const cProps = createMemo(() => {
    const {
      styles: { base },
    } = theme().drawer;
    // 2. set default props
    const [drawerProps, rest] = splitProps(mergedProps, [
      "open",
      "size",
      "overlay",
      "placement",
      "overlayProps",
      "onClose",
      "dismiss",
      "transition",
      "overlayRef",
    ]);
    // 3. set styles
    const drawerClasses = twMerge(
      classnames(objectsToString(base.drawer), {
        "top-0 right-0": mergedProps.placement === "right",
        "bottom-0 left-0": mergedProps.placement === "bottom",
        "top-0 left-0": mergedProps.placement === "top" || mergedProps.placement === "left",
      }),
      mergedProps.class,
    );
    const overlayClasses = twMerge(
      classnames(objectsToString(base.overlay)),
      mergedProps.overlayProps?.class,
    );

    const drawerAnimation = {
      open: {
        x: 0,
        y: 0,
      },
      close: {
        x:
          mergedProps.placement === "left"
            ? -mergedProps.size
            : mergedProps.placement === "right"
            ? mergedProps.size
            : 0,
        y:
          mergedProps.placement === "top"
            ? -mergedProps.size
            : mergedProps.placement === "bottom"
            ? mergedProps.size
            : 0,
      },
    };

    return { overlayClasses, drawerClasses, drawerAnimation, rest, drawerProps };
  });

  const backdropAnimation = {
    unmount: {
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    mount: {
      opacity: 1,
    },
  };

  // 5. return
  return (
    <>
      <Presence>
        <Show when={mergedProps.overlay && mergedProps.open}>
          <Motion.div
            ref={mergedProps.overlayRef}
            class={cProps().overlayClasses}
            initial={backdropAnimation.unmount}
            exit={backdropAnimation.unmount}
            animate={mergedProps.open ? backdropAnimation.mount : backdropAnimation.unmount}
            transition={{ duration: 0.3 }}
          />
        </Show>
      </Presence>
      <Motion.div
        {...cProps().rest}
        class={cProps().drawerClasses}
        style={{
          "max-width":
            mergedProps.placement === "left" || mergedProps.placement === "right"
              ? mergedProps.size + "px"
              : "100%",
          "max-height":
            mergedProps.placement === "top" || mergedProps.placement === "bottom"
              ? mergedProps.size + "px"
              : "100%",
          height:
            mergedProps.placement === "left" || mergedProps.placement === "right"
              ? "100vh"
              : "100%",
        }}
        initial={cProps().drawerAnimation.close}
        animate={mergedProps.open ? cProps().drawerAnimation.open : cProps().drawerAnimation.close}
        transition={mergedProps.transition}
      >
        {mergedProps.children}
      </Motion.div>
      <Show when={mergedProps.overlay && mergedProps.open}>
        <style>{`body { overflow: hidden }`}</style>
      </Show>
    </>
  );
};

export default Drawer;
