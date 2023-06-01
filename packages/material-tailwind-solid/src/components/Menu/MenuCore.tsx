// context
import { useTheme } from "../../context/theme";
import { MenuContext, useIsNestedMenu, useParentContext } from "./MenuContext";

// types
import { autoUpdate, flip, offset, shift } from "@floating-ui/dom";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { useFloating } from "solid-floating-ui";
import type { Accessor, JSX, ParentComponent } from "solid-js";
import {
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  mergeProps,
  onCleanup,
  onMount,
} from "solid-js";
import type {
  animate,
  children,
  contextValue,
  dismiss,
  handler,
  lockScroll,
  offset as offsetType,
  open,
  placement,
  treeRefType,
} from "../../types/components/menu";
import type { animation } from "../../types/generic";

export interface MenuProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offsetType;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  children: children;
  allowHover?: boolean;
}

export const MenuCore: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement> & MenuProps> = (
  props,
) => {
  let clickOutsideRef!: HTMLDivElement;

  // 1. init
  const theme = useTheme();
  const nested = useIsNestedMenu();
  const parentCtx = useParentContext();
  const [activeItem, setActiveItem] = createSignal<string>("");
  const [internalOpen, setInternalOpen] = createSignal(false);
  const [tree, setTree] = createSignal<treeRefType[]>([]);
  const [menuHandlerId, setMenuHandlerId] = createSignal<string>();
  const [reference, setReference] = createSignal<HTMLElement>();
  const [floating, setFloating] = createSignal<HTMLElement>();
  const id = createUniqueId();
  // 3. set animation
  const defaultAnimation: animation = {
    unmount: {
      opacity: 0,
      transformOrigin: "top",
      transform: "scale(0.95)",
      transition: { duration: 0.2, easing: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      transformOrigin: "top",
      transform: "scale(1)",
      transition: { duration: 0.2, easing: [0.4, 0, 0.2, 1] },
    },
  };

  const mergedProps = mergeProps(
    () => theme().menu.defaultProps,
    { animate: defaultAnimation },
    props,
  );

  const position = useFloating(reference, floating, {
    placement: mergedProps.placement,
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(mergedProps.offset)],
  });

  onMount(() => {
    //close  menu when click outside
    window.addEventListener("click", function (e) {
      if (!clickOutsideRef.contains(e.target as Node)) {
        ctx().handler(false);
      }
    });
  });
  createEffect(() => {
    if (!props.lockScroll) return;
    //disable scroll if lockScroll
    if (open() && !nested) disableBodyScroll(clickOutsideRef);
    //enable scroll when menu is closed
    if (!open() && !nested) clearAllBodyScrollLocks();
  });
  onCleanup(() => {
    window.removeEventListener("click", () => undefined);
    if (props.lockScroll) clearAllBodyScrollLocks();
  });

  const open = createMemo(() => mergedProps.open ?? internalOpen());
  const ctx: Accessor<contextValue> = createMemo(() => ({
    open,
    handler: mergedProps.handler ?? setInternalOpen,
    parentID: id,
    reference,
    setReference,
    setFloating,
    position,
    parentRef: reference,
    nested,
    allowHover: mergedProps.allowHover ?? nested,
    activeItem,
    setActiveItem,
    tree,
    addToTree: (el: treeRefType) => setTree((prev) => [...prev, el]),
    removeFromTree: (id: string) => setTree((prev) => prev.filter((el) => el.id !== id)),
    menuHandlerId,
    setMenuHandlerId,
    parentContext: parentCtx.parentContext,
  }));
  // 5. return
  return (
    <MenuContext.Provider value={ctx}>
      <div ref={clickOutsideRef} tabIndex={-1} aria-labelledby="menuwrapper">
        {mergedProps.children}
      </div>
    </MenuContext.Provider>
  );
};
export default MenuCore;
