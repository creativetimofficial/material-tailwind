import { List, ListItem, Card } from "@material-tailwind/react";

export function ListWithDisabledItem() {
  return (
    <Card className="w-96">
      <List>
        <ListItem disabled={true}>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
}
