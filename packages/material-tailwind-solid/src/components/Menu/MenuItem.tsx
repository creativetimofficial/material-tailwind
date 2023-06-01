// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, createUniqueId, onCleanup, onMount } from "solid-js";
import type { children, className, disabled } from "../../types/components/menu";
import { useMenu } from "./MenuContext";
import useKeyNavigation from "./utils";
import { mergeRefs } from "@solid-primitives/refs";

export interface MenuItemProps {
  className?: className;
  disabled?: disabled;
  children: children;
}

export const MenuItem: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & MenuItemProps
> = (props) => {
  // 1. init
  let treeRef!: HTMLButtonElement;
  const theme = useTheme();
  const context = useMenu();
  const id = createUniqueId();

  // 2. set styles
  const menuItemClasses = createMemo(() => {
    const {
      styles: { base },
    } = theme().menu;

    return twMerge(
      classnames(objectsToString(base.item.initial), {
        [objectsToString(base.item.disabled)]: props.disabled,
      }),
      props.class,
    );
  });

  // 3. Update tree
  onMount(() => {
    // Set MenuHandlerId if MenuItem is within MenuHandler in nested Menu
    if (context()?.nested && !context()?.menuHandlerId()) context()?.setMenuHandlerId(id);
    // If MenuHanlder set all in parentContext
    if (id === context()?.menuHandlerId()) {
      if (context()?.parentContext()?.tree().length === 0) treeRef.focus();
      context()?.parentContext()?.addToTree({ id, ref: treeRef });
      return;
    }
    //regular MenuItem
    context()?.tree().length === 0 && treeRef.focus();
    context()?.addToTree({ id, ref: treeRef });
  });
  onCleanup(() => {
    //remove Items from tree
    if (id === context()?.menuHandlerId()) return context()?.parentContext()?.removeFromTree(id);
    context()?.removeFromTree(id);
  });
  // 4. return
  return (
    <button
      {...props}
      ref={mergeRefs(props.ref, (el) => (treeRef = el))}
      role="menuitem"
      id={id}
      class={menuItemClasses()}
      onMouseEnter={(e) => {
        context()?.setActiveItem(id);
        typeof props.onMouseEnter === "function" && props.onMouseEnter(e);
      }}
      {...useKeyNavigation(id)}
    >
      {props.children}
      {id}
    </button>
  );
};

export default MenuItem;
