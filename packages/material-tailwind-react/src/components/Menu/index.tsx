import React from "react";

// @floating-ui
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react-dom-interactions";

// context
import { useTheme } from "../../context/theme";
import { useMenu } from "./MenuContext";

// menu components
import MenuCore from "./MenuCore";
import MenuHandler from "./MenuHandler";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";

// types
import type { MenuProps } from "./MenuCore";

const Menu = ({ open, handler, placement, offset, dismiss, animate, children }: MenuProps) => {
  // 1. init
  const parentId = useFloatingParentNodeId();
  const { menu } = useTheme();
  const { defaultProps } = menu;

  // 2. set default props
  placement = placement ?? defaultProps.placement;
  offset = offset ?? defaultProps.offset;
  dismiss = dismiss ?? defaultProps.dismiss;

  // 3. set props object
  const props = {
    open,
    handler,
    placement,
    offset,
    dismiss,
    animate,
  };

  // 4. return
  if (parentId == null) {
    return (
      <FloatingTree>
        <MenuCore {...props}>{children}</MenuCore>
      </FloatingTree>
    );
  }

  return <MenuCore {...props}>{children}</MenuCore>;
};

Menu.propTypes = MenuCore.propTypes;
Menu.displayName = "MaterialTailwind.Menu";

export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
export default Object.assign(Menu, { Handler: MenuHandler, List: MenuList, Item: MenuItem });
