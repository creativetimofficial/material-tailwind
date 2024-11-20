import * as React from "react";
import { Collapse, List } from "@material-tailwind/react";
import { NavArrowDown } from "iconoir-react";

export default function CollapseDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <List>
      <List.Item onClick={() => setIsOpen((cur) => !cur)}>
        Components
        <List.ItemEnd>
          <NavArrowDown
            className={`h-5 w-5 stroke-[1.5] ${isOpen ? "rotate-180" : ""}`}
          />
        </List.ItemEnd>
      </List.Item>
      <Collapse open={isOpen}>
        <List>
          <List.Item>Avatar</List.Item>
          <List.Item>Button</List.Item>
          <List.Item>Input</List.Item>
          <List.Item>Checkbox</List.Item>
          <List.Item>Select</List.Item>
        </List>
      </Collapse>
    </List>
  );
}
