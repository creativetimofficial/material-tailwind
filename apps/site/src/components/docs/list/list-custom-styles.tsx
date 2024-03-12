import { List, Chip } from "@material-tailwind/react/dist";
import { Mail, Settings, Trash } from "iconoir-react";

export function ListCustomStyles() {
  return (
    <List>
      <List.Item className="group hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
        <List.ItemStart>
          <Mail className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Inbox
        <List.ItemEnd>
          <Chip
            size="sm"
            variant="ghost"
            className="group-hover:bg-blue-400 group-hover:text-white"
          >
            <Chip.Label>14</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item className="group hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
        <List.ItemStart>
          <Trash className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Trash
        <List.ItemEnd>
          <Chip
            size="sm"
            variant="ghost"
            className="group-hover:bg-blue-400 group-hover:text-white"
          >
            <Chip.Label>40</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item className="group hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
        <List.ItemStart>
          <Settings className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Settings
      </List.Item>
    </List>
  );
}
