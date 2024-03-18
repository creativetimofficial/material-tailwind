import { Menu, Button } from "@material-tailwind/react/dist";

export function MenuWithDivider() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Add Team</Menu.Item>
        <Menu.Item>Add Project</Menu.Item>
        <Menu.Item>My Profile</Menu.Item>
        <hr className="-mx-1 my-1 border-secondary-dark" />
        <Menu.Item className="text-error hover:bg-error/10 focus:bg-error/10">
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
