import { ReactNode, Dispatch, SetStateAction } from "react";

// @floating-ui types
import { Placement } from "@floating-ui/react-dom-interactions"

// generic types
import type { animate, offset, dismiss } from "../../types/generic";

interface MenuItemProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

declare function MenuItem(props: MenuItemProps): JSX.Element;

interface MenuProps {
  open: boolean;
  handler: Dispatch<SetStateAction<any>>;
  node: ReactNode;
  placement?: Placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate; 
  className?: string;
  children: ReactNode;
}

declare function MenuCore(props: MenuProps): JSX.Element;

declare function Menu(props: MenuProps): JSX.Element;

export { Menu, MenuCore, MenuItem, MenuProps, MenuItemProps };
export default Menu;