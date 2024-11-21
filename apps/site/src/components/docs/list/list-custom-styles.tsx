import { List, Chip } from "@material-tailwind/react";
import { Mail, Settings, Bin } from "iconoir-react";

export function ListCustomStyles() {
  return (
    <List>
      <List.Item className="group hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary">
        <List.ItemStart>
          <Mail className="h-5 w-5" />
        </List.ItemStart>
        Inbox
        <List.ItemEnd>
          <Chip
            size="sm"
            variant="ghost"
            color="info"
            className="transition-colors duration-300 group-hover:bg-white"
          >
            <Chip.Label>14</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item className="group hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary">
        <List.ItemStart>
          <Bin className="h-5 w-5" />
        </List.ItemStart>
        Trash
        <List.ItemEnd>
          <Chip
            size="sm"
            variant="ghost"
            color="info"
            className="transition-colors duration-300 group-hover:bg-white"
          >
            <Chip.Label>40</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item className="group hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary">
        <List.ItemStart>
          <Settings className="h-5 w-5" />
        </List.ItemStart>
        Settings
      </List.Item>
    </List>
  );
}
