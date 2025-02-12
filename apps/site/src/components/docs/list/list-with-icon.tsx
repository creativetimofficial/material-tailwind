import { List } from "@material-tailwind/react";
import { Bin, Mail, Settings } from "iconoir-react";

export default function ListWithIcon() {
  return (
    <List>
      <List.Item>
        <List.ItemStart>
          <Mail className="h-5 w-5" />
        </List.ItemStart>
        Inbox
      </List.Item>
      <List.Item>
        <List.ItemStart>
          <Bin className="h-5 w-5" />
        </List.ItemStart>
        Trash
      </List.Item>
      <List.Item>
        <List.ItemStart>
          <Settings className="h-5 w-5" />
        </List.ItemStart>
        Settings
      </List.Item>
    </List>
  );
}
