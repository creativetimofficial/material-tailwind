import {
  Popover,
  Button,
  Typography,
  Avatar,
  List,
} from "@material-tailwind/react";
import { City, Mail, Phone } from "iconoir-react";

export function ContactPopover() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Contact Info</Popover.Trigger>
      <Popover.Content className="max-w-sm p-1">
        <List>
          <List.Item>
            <List.ItemStart>
              <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" />
            </List.ItemStart>
            <div>
              <Typography color="default" className="font-semibold">
                Alex Andrew
              </Typography>
              <Typography type="small" className="text-foreground">
                General Manager
              </Typography>
            </div>
          </List.Item>
          <hr className="-mx-1 my-1 border-secondary" />
          <List.Item>
            <List.ItemStart>
              <City className="h-[18px] w-[18px]" />
            </List.ItemStart>
            ABC Construction
          </List.Item>
          <List.Item>
            <List.ItemStart>
              <Phone className="h-[18px] w-[18px]" />
            </List.ItemStart>
            00 123 456 789
          </List.Item>
          <List.Item>
            <List.ItemStart>
              <Mail className="h-[18px] w-[18px]" />
            </List.ItemStart>
            someone@example.com
          </List.Item>
        </List>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
