import {
  Popover,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react/dist";
import { City, MapPin } from "iconoir-react";

export function ProfileInfoPopover() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Profile Info</Popover.Trigger>
      <Popover.Content className="max-w-sm">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" />
          <Button size="sm">Follow</Button>
        </div>
        <Typography
          type="h5"
          className="mb-1 flex items-center gap-2 font-semibold"
        >
          <span>Alex Andrew</span> •{" "}
          <Typography
            as="a"
            href="#profile-info-popover"
            className="font-semibold"
          >
            @alex
          </Typography>
        </Typography>
        <Typography type="small" className="text-foreground">
          Frontend Developer • Major interest in Web Development: motivated to
          achieve measurable results, to deepen my knowledge and improve my
          skills.
        </Typography>
        <hr className="-mx-2.5 my-2.5 border-secondary-dark" />
        <div className="flex items-center gap-8">
          <Typography
            type="small"
            className="flex items-center gap-1.5 text-foreground"
          >
            <MapPin className="h-4 w-4" />
            United Kingdom
          </Typography>
          <Typography
            type="small"
            className="flex items-center gap-1.5 text-foreground"
          >
            <City className="h-4 w-4" />
            Material Tailwind
          </Typography>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
