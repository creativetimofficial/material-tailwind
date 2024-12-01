import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDivider() {
  return (
    <Menu>
      <MenuHandler>
        <Button> Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <hr className="my-3" />
        <MenuItem>Menu Item 4</MenuItem>
      </MenuList>
    </Menu>
  );
}
