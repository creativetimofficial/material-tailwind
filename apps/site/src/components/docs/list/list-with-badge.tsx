import { List, Chip } from "@material-tailwind/react";
import { Mail, Settings, Bin } from "iconoir-react";

export default function ListWithBadge() {
  return (
    <List>
      <List.Item>
        <List.ItemStart>
          <Mail className="h-5 w-5" />
        </List.ItemStart>
        Inbox
        <List.ItemEnd>
          <Chip size="sm" variant="ghost">
            <Chip.Label>14</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item>
        <List.ItemStart>
          <Bin className="h-5 w-5" />
        </List.ItemStart>
        Trash
        <List.ItemEnd>
          <Chip size="sm" variant="ghost">
            <Chip.Label>40</Chip.Label>
          </Chip>
        </List.ItemEnd>
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
