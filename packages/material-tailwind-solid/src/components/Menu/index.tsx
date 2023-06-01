// @floating-ui

// context
import { useMenu } from "./MenuContext";

// menu components
import type { JSX, ParentComponent } from "solid-js";
import type { MenuProps } from "./MenuCore";
import { MenuCore } from "./MenuCore";
import { MenuHandler } from "./MenuHandler";
import type { MenuItemProps } from "./MenuItem";
import { MenuItem } from "./MenuItem";
import type { MenuListProps } from "./MenuList";
import { MenuList } from "./MenuList";

const Menu: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement> & MenuProps> = (props) => {
  return <MenuCore {...props}>{props.children}</MenuCore>;
};

export type { MenuProps, MenuListProps, MenuItemProps };
export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
export default Object.assign(Menu, { Handler: MenuHandler, List: MenuList, Item: MenuItem });
