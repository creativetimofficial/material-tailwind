import * as React from "react";
import { List } from "@material-tailwind/react";

export default function ListWithSelectedItem() {
  const [selected, setSelected] = React.useState("inbox");

  return (
    <List>
      <List.Item
        selected={selected === "inbox"}
        onClick={() => setSelected("inbox")}
      >
        Inbox
      </List.Item>
      <List.Item
        selected={selected === "trash"}
        onClick={() => setSelected("trash")}
      >
        Trash
      </List.Item>
      <List.Item
        selected={selected === "settings"}
        onClick={() => setSelected("settings")}
      >
        Settings
      </List.Item>
    </List>
  );
}
