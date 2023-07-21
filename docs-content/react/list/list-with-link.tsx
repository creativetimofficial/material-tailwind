import { List, ListItem, Card } from "@material-tailwind/react";

export function ListWithLink() {
  return (
    <Card className="w-96">
      <List>
        <a href="#" className="text-initial">
          <ListItem>Inbox</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem>Trash</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem>Settings</ListItem>
        </a>
      </List>
    </Card>
  );
}
