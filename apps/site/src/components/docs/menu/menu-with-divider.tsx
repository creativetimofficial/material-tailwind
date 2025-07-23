import { Menu, Button } from "@material-tailwind/react";

export function MenuWithDivider() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Add Team</Menu.Item>
        <Menu.Item>Add Project</Menu.Item>
        <Menu.Item>My Profile</Menu.Item>
        <hr className="my-1! -mx-1 border-surface" />
        <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error dark:hover:text-error dark:focus:text-error">
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
