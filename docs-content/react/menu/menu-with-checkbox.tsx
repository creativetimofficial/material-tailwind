import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

export function MenuWithCheckbox() {
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button> Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="p-0">
          <label
            htmlFor="item-1"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-1"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Menu Item 1
          </label>
        </MenuItem>
        <MenuItem className="p-0">
          <label
            htmlFor="item-2"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-2"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Menu Item 2
          </label>
        </MenuItem>
        <MenuItem className="p-0">
          <label
            htmlFor="item-3"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-3"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Menu Item 3
          </label>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
