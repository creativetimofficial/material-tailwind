import { Menu, Button } from "@material-tailwind/react";
import { NavArrowRight } from "iconoir-react";

export function NestedMenu() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Add Team</Menu.Item>
        <Menu.Item>Add Project</Menu.Item>
        <Menu>
          <Menu.Trigger
            as={Menu.Item}
            className="flex items-center justify-between"
          >
            My Profile <NavArrowRight className="h-4 w-4 translate-x-1" />
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Edit Profile</Menu.Item>
            <Menu.Item>Change Password</Menu.Item>
            <Menu.Item>Upgrade to PRO</Menu.Item>
          </Menu.Content>
        </Menu>
      </Menu.Content>
    </Menu>
  );
}
