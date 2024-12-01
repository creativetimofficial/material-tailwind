import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

export function MenuWithScrollingContent() {
  return (
    <Menu>
      <MenuHandler>
        <Button> Menu</Button>
      </MenuHandler>
      <MenuList className="max-h-72">
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Menu Item 4</MenuItem>
        <MenuItem>Menu Item 5</MenuItem>
        <MenuItem>Menu Item 6</MenuItem>
        <MenuItem>Menu Item 7</MenuItem>
        <MenuItem>Menu Item 8</MenuItem>
        <MenuItem>Menu Item 9</MenuItem>
        <MenuItem>Menu Item 10</MenuItem>
        <MenuItem>Menu Item 11</MenuItem>
        <MenuItem>Menu Item 12</MenuItem>
        <MenuItem>Menu Item 13</MenuItem>
        <MenuItem>Menu Item 14</MenuItem>
        <MenuItem>Menu Item 15</MenuItem>
        <MenuItem>Menu Item 16</MenuItem>
        <MenuItem>Menu Item 17</MenuItem>
        <MenuItem>Menu Item 18</MenuItem>
        <MenuItem>Menu Item 19</MenuItem>
        <MenuItem>Menu Item 20</MenuItem>
      </MenuList>
    </Menu>
  );
}
