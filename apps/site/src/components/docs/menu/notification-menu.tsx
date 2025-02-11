import * as React from "react";
import { Menu, IconButton, Typography, Avatar } from "@material-tailwind/react";
import { Bell, Clock } from "iconoir-react";

const MenuItem = React.forwardRef<
  typeof Menu.Item,
  {
    img: string;
    title: string;
    date: string;
  }
>(({ img, title, date, ...rest }, ref) => {
  return (
    <Menu.Item ref={ref} {...rest} className="gap-3">
      <Avatar src={img} alt="profile-picture" />
      <div>
        <Typography
          type="small"
          color="default"
          className="mb-1 block font-semibold"
        >
          {title}
        </Typography>
        <Typography
          type="small"
          className="flex items-center gap-1 text-xs text-foreground"
        >
          <Clock className="h-3 w-3" />
          {date}
        </Typography>
      </div>
    </Menu.Item>
  );
});

export default function NotificationMenu() {
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
          img="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-2.jpg"
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
