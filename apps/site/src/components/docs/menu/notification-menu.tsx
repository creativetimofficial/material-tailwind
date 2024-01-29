import * as React from "react";
import {
  Menu,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react/dist";
import { Bell, Clock } from "iconoir-react";

const MenuItem = React.forwardRef<any, any>(
  ({ img, title, date, ...rest }, ref) => {
    return (
      <Menu.Item ref={ref} {...rest} className="gap-3">
        <Avatar src={img} alt="profile-picture" />
        <div>
          <Typography variant="small" className="mb-1 block font-semibold">
            {title}
          </Typography>
          <Typography
            variant="small"
            className="flex items-center gap-1 text-sm text-gray-600"
          >
            <Clock className="h-3.5 w-3.5" />
            {date}
          </Typography>
        </div>
      </Menu.Item>
    );
  },
);

export function NotificationMenu() {
  return (
    <Menu>
      <Menu.Trigger as={IconButton} variant="ghost" size="sm">
        <Bell className="h-4 w-4 stroke-2" />
      </Menu.Trigger>
      <Menu.Content>
        <MenuItem
          img="https://dub.sh/iu8bOfU"
          title="Tania send you a message"
          date="13 minutes ago"
        />
        <MenuItem
          img="https://dub.sh/6i238JA"
          title="Natali replied to your email."
          date="1 hour ago"
        />
        <MenuItem
          img="https://dub.sh/iuFsnmW"
          title="You've received a payment."
          date="5 hours ago"
        />
      </Menu.Content>
    </Menu>
  );
}
