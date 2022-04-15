import { useState } from "react";
import { Menu, MenuItem } from "components/Menu";
import Button from "components/Button";

export default function Menus() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const closeMenu = () => setOpen(false);
  const closeMenu2 = () => setOpen2(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <Menu
        node={<Button variant="gradient">Open Menu</Button>}
        placement="bottom"
        open={open}
        handler={setOpen}
      >
        <MenuItem onClick={closeMenu}>New tab</MenuItem>
        <MenuItem onClick={closeMenu}>New window</MenuItem>
        <Menu
          open={open2}
          handler={setOpen2}
          placement="right"
          offset={15}
          node={<MenuItem>More Tabs</MenuItem>}
        >
          <MenuItem onClick={closeMenu2}>New tab</MenuItem>
          <MenuItem onClick={closeMenu2}>New window</MenuItem>
          <MenuItem disabled>Close Tab</MenuItem>
        </Menu>
        <MenuItem disabled>Close Tab</MenuItem>
      </Menu>
    </div>
  );
}
