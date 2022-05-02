import React from "react";

// @floating-ui
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react-dom-interactions";

// context
import { useMenu } from "./MenuContext";

// menu components
import MenuCore from "./MenuCore";
import MenuHandler from "./MenuHandler";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";

// types
import type { MenuProps } from "./MenuCore";

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ open, handler, placement, offset, dismiss, animate, lockScroll, children }, ref) => {
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

    return <MenuCore {...props}>{children}</MenuCore>;
  },
);

Menu.propTypes = MenuCore.propTypes;
Menu.displayName = "MaterialTailwind.Menu";

export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
export default Object.assign(Menu, { Handler: MenuHandler, List: MenuList, Item: MenuItem });
