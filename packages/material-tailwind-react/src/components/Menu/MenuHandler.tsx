import React from "react";

// utils
import mergeRefs from "react-merge-refs";

// context
import { useMenu } from "./MenuContext";

// types
import type { children } from "../../types/components/menu";
import { propTypesChildren } from "../../types/components/menu";

export interface MenuHandlerProps extends React.ComponentProps<any> {
  children: children | React.ComponentProps<any>;
}

export const MenuHandler = React.forwardRef<HTMLElement, MenuHandlerProps>(
  ({ children, ...rest }, ref) => {
    const { getReferenceProps, reference } = useMenu();

    const mergedRef = React.useMemo(() => mergeRefs([ref, reference]), [ref, reference]);

    return React.cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRef,
      }),
    });
  },
);

MenuHandler.propTypes = {
  children: propTypesChildren,
};

MenuHandler.displayName = "MaterialTailwind.MenuHandler";

export default MenuHandler;
