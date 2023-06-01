import type { JSX } from "solid-js";
import type { ParentContext } from "../../types/components/menu";
import { useMenu } from "./MenuContext";
export default function useKeyNavigation<T = HTMLButtonElement>(
  id?: string,
): Pick<JSX.CustomEventHandlersCamelCase<T>, "onKeyDown" & "onFocusIn"> {
  const context = useMenu();
  const open = () => {
    context()?.handler(true);
    context()
      ?.parentContext()
      ?.setActiveItem(context()?.parentID || "");
  };
  const close = () => {
    //MenuHandler: we only close the menu if we can set a new focus
    if (id === context()?.menuHandlerId() && context()?.parentContext()?.parentContext()) {
      context()?.parentContext()?.handler(false);
      context()
        ?.parentContext()
        ?.parentContext()
        ?.tree()
        ?.find((o) => o.id === context()?.parentContext()?.menuHandlerId())
        ?.ref?.focus();
      return;
    }
    //MenuItem: we only close the menu if we can set a new focus
    if (context()?.parentContext()) {
      context()?.handler(false);

      context()
        ?.parentContext()
        ?.tree()
        ?.find((o) => o.id === context()?.menuHandlerId())
        ?.ref?.focus();
    }
  };

  const closeRecursive = (ctx: ParentContext = context): void => {
    if (ctx()?.parentContext()) return closeRecursive(ctx()?.parentContext);
    ctx()?.handler(false);
    ctx()?.reference()?.focus();
  };
  const getNextElement = () => {
    const currentIdx = context()
      ?.tree()
      .findIndex((o) => id === o.id) as number;

    if (currentIdx === -1) {
      const currentIdx = context()
        ?.parentContext()
        ?.tree()
        .findIndex((o) => id === o.id) as number;

      const nextIdx =
        context()?.parentContext()?.tree().length || -1 > currentIdx ? currentIdx + 1 : currentIdx;
      const nextElement = context()?.open()
        ? context()?.tree()[0]
        : context()?.parentContext()?.tree()[nextIdx];

      // console.log({
      //   currentIdx,
      //   nextIdx: context()?.open ? 0 : currentIdx + 1,
      //   nextElementID: nextElement?.id,
      //   nextElementRef: nextElement?.ref,
      //   tree: context()?.tree(),
      //   parentTree: context()?.parentContext()?.tree(),
      //   menuHandlerId: context()?.menuHandlerId(),
      // });
      return nextElement?.ref;
    }

    const nextIdx = context()?.tree().length || -1 > currentIdx ? currentIdx + 1 : currentIdx; //0 should be the is nested which means is Submenu Case

    // console.log("Event in useKeyNavigation", {
    //   id: target?.id,
    //   tabIndex: target?.tabIndex,
    //   tree: context()?.tree(),
    //   nested: context()?.nested,
    //   currentIdx,
    //   nextIdx,
    //   nextElementId: context()?.tree()[nextIdx]?.id,
    //   nextElement: context()?.tree()[nextIdx]?.ref,
    //   menuHandlerId: context()?.menuHandlerId(),
    //   e,
    // });
    return context()?.tree()[nextIdx]?.ref;
  };
  const getPreviousElement = () => {
    const currentIdx = context()
      ?.tree()
      .findIndex((o) => id === o.id) as number;

    if (currentIdx === -1) {
      const currentIdx = context()
        ?.parentContext()
        ?.tree()
        .findIndex((o) => id === o.id) as number;

      const nextIdx = currentIdx > 0 ? currentIdx - 1 : currentIdx;
      const nextElement = context()?.open()
        ? context()?.tree()[0]
        : context()?.parentContext()?.tree()[nextIdx];

      return nextElement?.ref;
    }

    const nextIdx = currentIdx > 0 ? currentIdx - 1 : currentIdx; //0 should be the is nested which means is Submenu Case

    return context()?.tree()[nextIdx]?.ref;
  };

  // }
  return {
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        context()?.position?.placement.includes("bottom") && open();
        context()?.position?.placement.includes("top") && close();
        getNextElement()?.focus();
      }
      if (e.key === "ArrowUp") {
        context()?.position?.placement.includes("bottom") && close();
        context()?.position?.placement.includes("top") && open();
        getPreviousElement()?.focus();
      }
      if (e.key === "ArrowRight") {
        if (context()?.position?.placement.includes("left")) {
          close();
        }
        if (context()?.position?.placement.includes("right")) {
          open();
        }
      }
      if (e.key === "ArrowLeft") {
        if (context()?.position?.placement.includes("right")) {
          close();
        }
        if (context()?.position?.placement.includes("left")) {
          open();
        }
      }
      if (e.key === "Enter" || e.key === " ") {
        if (id === context()?.menuHandlerId()) {
          open();
          return;
        }
        //make sure the "click" event is triggered in target and not on new focused element
        const target = e.currentTarget as HTMLButtonElement;
        target.click();
        e.preventDefault();
        closeRecursive();
      }

      if (e.key === "Escape") closeRecursive();

      if (e.key === "Tab") {
        e.preventDefault();
        if (!e.shiftKey) return getNextElement()?.focus();
        if (
          context()
            ?.tree()
            .findIndex((o) => id === o.id) === 0
        )
          return close();
        getPreviousElement()?.focus();
      }
    },
  };
}
