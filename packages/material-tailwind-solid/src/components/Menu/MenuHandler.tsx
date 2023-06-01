// types
import { mergeRefs } from "@solid-primitives/refs";
import classnames from "classnames";
import type { JSX, ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";
import { useMenu } from "./MenuContext";

export const MenuHandler: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  let treeRef!: HTMLButtonElement;
  const context = useMenu();

  return (
    <button
      {...props}
      class={twMerge(classnames(props.class, { "w-full": context()?.nested }))}
      ref={mergeRefs(
        props.ref,
        (el) => (treeRef = el),
        (el) => context()?.setReference(el),
      )}
      onClick={() => context()?.handler(!context()?.open())}
      tabIndex={0}
      onMouseOver={() => {
        if (context()?.allowHover) {
          context()?.handler(true);
        }

        context()
          ?.parentContext()
          ?.setActiveItem(context()?.parentID || "");
      }}
      onFocusIn={() => {
        const focusableElements = treeRef?.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) as NodeListOf<HTMLElement>;
        console.log(focusableElements);
        if (focusableElements?.length === 0) return;
        const currentIndex = Array.from(focusableElements).indexOf(treeRef);

        // if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        const nextElement = focusableElements[nextIndex];
        nextElement.focus();
        // }
      }}
    >
      {props.children}
    </button>
  );
};
export default MenuHandler;
