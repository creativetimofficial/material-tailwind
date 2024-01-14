import { List, Chip } from "@material-tailwind/react/dist";
import { Mail, Settings, Trash } from "iconoir-react";

export function ListWithBadge() {
  return (
    <List>
      <List.Item>
        <List.ItemStart>
          <Mail className="h-[18px] w-[18px]" />
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
          <Trash className="h-[18px] w-[18px]" />
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
          <Settings className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Settings
      </List.Item>
    </List>
  );
}
