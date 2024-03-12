import { Menu, Button } from "@material-tailwind/react/dist";

export function MenuPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Menu placement="top">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="top-start">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="top-end">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
      </div>
      <div className="mb-3 flex gap-3">
        <Menu placement="right">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="right-start">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="right-end">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
      </div>
      <div className="mb-3 flex gap-3">
        <Menu placement="bottom">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="bottom-start">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="bottom-end">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
      </div>
      <div className="flex gap-3">
        <Menu placement="left">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="left-start">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
        <Menu placement="left-end">
          <Menu.Trigger as={Button}>Open</Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Add Team</Menu.Item>
            <Menu.Item>Add Project</Menu.Item>
            <Menu.Item>My Profile</Menu.Item>
          </Menu.Content>
        </Menu>
      </div>
    </>
  );
}
