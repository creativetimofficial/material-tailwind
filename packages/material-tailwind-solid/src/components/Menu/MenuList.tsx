// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useMenu } from "./MenuContext";

// types
import { Motion } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, createUniqueId, mergeProps } from "solid-js";
import type { children } from "../../types/components/menu";

export interface MenuListProps {
  dismissible?: boolean;
  children: children;
}

export const MenuList: ParentComponent<JSX.HTMLAttributes<HTMLUListElement> & MenuListProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  const context = useMenu();
  // 2. set default props
  const mergedProps = mergeProps(() => theme().menu.defaultProps, props);

  // 3. set styles
  const menuClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().menu.styles.base.menu)), mergedProps.class),
  );

  // 5. create an instance of AnimatePresence because of the types issue with the children
  const id = createUniqueId();

  // 6. menu component
  return (
    <div
      id={mergedProps.id ?? id}
      ref={(el) => context()?.setFloating(el)}
      style={{
        position: context()?.position?.strategy,
        width: "max-content",
        top: context()?.position?.y + "px" ?? 0,
        left: context()?.position?.x + "px" ?? 0,
      }}
      aria-hidden={!context()?.open()}
      data-floating-menu-list
    >
      <Show
        when={
          context()?.open() &&
          (!context()?.nested ||
            (context()?.nested && context()?.parentContext()?.activeItem() === context()?.parentID))
        }
      >
        <Motion.ul
          {...mergedProps}
          class={menuClasses()}
          initial={mergedProps.animate.unmount}
          exit={mergedProps.animate.unmount}
          animate={context()?.open() ? mergedProps.animate.mount : mergedProps.animate.unmount}
        >
          {props.children}
        </Motion.ul>
      </Show>
    </div>
  );
};
export default MenuList;
