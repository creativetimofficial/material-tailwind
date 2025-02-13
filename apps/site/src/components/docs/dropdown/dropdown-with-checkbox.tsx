import { Menu, Button, Checkbox } from "@material-tailwind/react";

export default function MenuWithCheckbox() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Sort</Menu.Trigger>
      <Menu.Content>
        <Menu.Item
          as="label"
          htmlFor="task-name"
          className="gap-2 pl-1.5"
          closeOnClick={false}
        >
          <Checkbox id="task-name">
            <Checkbox.Indicator />
          </Checkbox>
          Task Name
        </Menu.Item>
        <Menu.Item
          as="label"
          htmlFor="date-created"
          className="gap-2 pl-1.5"
          closeOnClick={false}
        >
          <Checkbox id="date-created">
            <Checkbox.Indicator />
          </Checkbox>
          Date Created
        </Menu.Item>
        <Menu.Item
          as="label"
          htmlFor="completed"
          className="gap-2 pl-1.5"
          closeOnClick={false}
        >
          <Checkbox id="completed">
            <Checkbox.Indicator />
          </Checkbox>
          Completed
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
