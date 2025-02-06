import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { Bell } from "iconoir-react";

export function BadgeOverlap() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <Badge placement="top-end" overlap="square">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge placement="top-end" overlap="square">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator />
      </Badge>
      <Badge placement="bottom-end" overlap="circular">
        <Badge.Content>
          <Avatar src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" />
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge placement="bottom-end" overlap="circular">
        <Badge.Content>
          <Avatar src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" />
        </Badge.Content>
        <Badge.Indicator />
      </Badge>
    </div>
  );
}
