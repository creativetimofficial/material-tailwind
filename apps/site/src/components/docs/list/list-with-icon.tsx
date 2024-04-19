import { List } from "@material-tailwind/react";
import { Mail, Settings, Trash } from "iconoir-react";

export function ListWithIcon() {
  return (
    <List>
      <List.Item>
        <List.ItemStart>
          <Mail className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Inbox
      </List.Item>
      <List.Item>
        <List.ItemStart>
          <Trash className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Trash
      </List.Item>
      <List.Item>
        <List.ItemStart>
          <Settings className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Settings
      </List.Item>
    </List>
  );
}
