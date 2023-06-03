// @floating-ui

// context
import { usePopover } from "./PopoverContext";

// types
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";
import type { children } from "../../types/components/popover";

export interface PopoverHandlerProps {
  children: children;
}

export const PopoverHandler: ParentComponent<
  PopoverHandlerProps & JSX.HTMLAttributes<HTMLElement>
> = (props) => {
  const context = usePopover();

  return (
    <button
      ref={mergeRefs(props.ref, (el) => context()?.setReference(el))}
      onClick={(e) => {
        context()?.handler(!context()?.open());
        typeof props.onClick === "function" && props.onClick(e);
      }}
    >
      {props.children}
    </button>
  );
};

export default PopoverHandler;
