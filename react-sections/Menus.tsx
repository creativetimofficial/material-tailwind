import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "../packages/material-tailwind-react/src";
import { Button } from "../packages/material-tailwind-react/src";

export default function Menus() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <Menu lockScroll>
        <MenuHandler>
          <Button variant="gradient">Open Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>New tab</MenuItem>
          <MenuItem>New window</MenuItem>
          <Menu placement="right" offset={15}>
            <MenuHandler>
              <MenuItem>More Tabs</MenuItem>
            </MenuHandler>
            <MenuList>
              <MenuItem>New tab</MenuItem>
              <MenuItem>New window</MenuItem>
              <MenuItem disabled>Close Tab</MenuItem>
            </MenuList>
          </Menu>
          <MenuItem disabled>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
