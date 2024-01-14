import { Menu, Button } from "@material-tailwind/react/dist";

export function MenuWithDivider() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Add Team</Menu.Item>
        <Menu.Item>Add Project</Menu.Item>
        <Menu.Item>My Profile</Menu.Item>
        <hr className="-mx-1 my-1 border-secondary-dark dark:border-secondary-dm-main" />
        <Menu.Item className="text-error-main hover:bg-error-main/10 focus:bg-error-main/10 dark:text-error-dm-main dark:hover:bg-error-dm-main/10 dark:focus:bg-error-dm-main/10">
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
