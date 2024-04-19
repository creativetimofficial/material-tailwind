import { Menu, Button, Input } from "@material-tailwind/react";

export function MenuWithSearch() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content>
        <Input className="mb-1">
          <Input.Field placeholder="Search..." />
        </Input>
        <Menu.Item>Add Team</Menu.Item>
        <Menu.Item>Add Project</Menu.Item>
        <Menu.Item>My Profile</Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
