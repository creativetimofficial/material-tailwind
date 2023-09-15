import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Menu placement="top">
          <MenuHandler>
            <Button>Top</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="top-start">
          <MenuHandler>
            <Button>Top Start</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="top-end">
          <MenuHandler>
            <Button>Top End</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="mb-3 flex gap-3">
        <Menu placement="right">
          <MenuHandler>
            <Button>Right</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right-start">
          <MenuHandler>
            <Button>Right Start</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right-end">
          <MenuHandler>
            <Button>Right End</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="mb-3 flex gap-3">
        <Menu placement="bottom">
          <MenuHandler>
            <Button>Bottom</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button>Bottom Start</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="bottom-end">
          <MenuHandler>
            <Button>Bottom End</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="flex gap-3">
        <Menu placement="left">
          <MenuHandler>
            <Button>Left</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="left-start">
          <MenuHandler>
            <Button>Left Start</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="left-end">
          <MenuHandler>
            <Button>Left End</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
