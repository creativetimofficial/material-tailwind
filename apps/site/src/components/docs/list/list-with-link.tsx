import { List } from "@material-tailwind/react";

export function ListWithLink() {
  return (
    <List>
      <List.Item as="a" href="#list-with-link">
        Inbox
      </List.Item>
      <List.Item as="a" href="#list-with-link">
        Trash
      </List.Item>
      <List.Item as="a" href="#list-with-link">
        Settings
      </List.Item>
    </List>
  );
}
