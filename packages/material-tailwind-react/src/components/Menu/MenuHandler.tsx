import React from "react";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// context
import { useMenu } from "./MenuContext";

// types
import type { children } from "../../types/components/menu";
import { propTypesChildren } from "../../types/components/menu";

export interface MenuHandlerProps extends React.ComponentProps<any> {
  children: children | React.ComponentProps<any>;
}

export const MenuHandler = React.forwardRef<HTMLButtonElement, MenuHandlerProps>(
  ({ children, ...rest }, ref) => {
    const { getReferenceProps, reference, nested } = useMenu();

    const mergedRef = useMergeRefs([ref, reference]);

    return React.cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRef,
        onClick(event) {
          event.stopPropagation();
        },
        ...(nested && {
          role: "menuitem",
        }),
      }),
    });
  },
);

MenuHandler.propTypes = {
  children: propTypesChildren,
};

MenuHandler.displayName = "MaterialTailwind.MenuHandler";

export default MenuHandler;
