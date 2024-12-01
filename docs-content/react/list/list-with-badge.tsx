import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
} from "@material-tailwind/react";

export function ListWithBadge() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Spam
          <ListItemSuffix>
            <Chip
              value="2"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Trash
          <ListItemSuffix>
            <Chip
              value="40"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
  );
}
