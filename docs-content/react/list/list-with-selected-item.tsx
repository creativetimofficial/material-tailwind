import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

export function ListWithSelectedItem() {
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  return (
    <Card className="w-96">
      <List>
        <ListItem selected={selected === 1} onClick={() => setSelectedItem(1)}>
          Inbox
        </ListItem>
        <ListItem selected={selected === 2} onClick={() => setSelectedItem(2)}>
          Trash
        </ListItem>
        <ListItem selected={selected === 3} onClick={() => setSelectedItem(3)}>
          Settings
        </ListItem>
      </List>
    </Card>
  );
}
