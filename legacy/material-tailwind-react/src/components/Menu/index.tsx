import React from "react";

// @floating-ui
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";

// context
import { useMenu } from "./MenuContext";

// menu components
import { MenuCore, MenuProps } from "./MenuCore";
import { MenuHandler, MenuHandlerProps } from "./MenuHandler";
import { MenuList, MenuListProps } from "./MenuList";
import { MenuItem, MenuItemProps } from "./MenuItem";

const Menu = React.forwardRef<HTMLButtonElement, MenuProps>(
  (
    { open, handler, placement, offset, dismiss, animate, lockScroll, allowHover, children },
    ref,
  ) => {
    // 1. init
    const parentId = useFloatingParentNodeId();

    // 3. set props object
    const props = {
      open,
      handler,
      placement,
      offset,
      dismiss,
      animate,
      lockScroll,
      allowHover,
    };

    // 4. return
    if (parentId == null) {
      return (
        <FloatingTree>
          <MenuCore ref={ref} {...props}>
            {children}
          </MenuCore>
        </FloatingTree>
      );
    }

    return (
      <MenuCore ref={ref} {...props}>
        {children}
      </MenuCore>
    );
  },
);

Menu.propTypes = MenuCore.propTypes;
Menu.displayName = "MaterialTailwind.Menu";

export type { MenuProps, MenuHandlerProps, MenuListProps, MenuItemProps };
export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
export default Object.assign(Menu, { Handler: MenuHandler, List: MenuList, Item: MenuItem });
