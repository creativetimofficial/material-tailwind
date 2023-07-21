import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function NestedMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Button>Open Nested Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem>Nested Item</MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
