import { List } from "@material-tailwind/react/dist";

export function ListWithDisabledItem() {
  return (
    <List>
      <List.Item disabled>Inbox</List.Item>
      <List.Item>Trash</List.Item>
      <List.Item>Settings</List.Item>
    </List>
  );
}
