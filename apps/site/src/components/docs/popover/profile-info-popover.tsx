import React from "react";
import { Popover, Button, Avatar, Typography } from "@material-tailwind/react";
import { City, MapPin } from "iconoir-react";

export default function ProfileInfoPopover() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-72">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)}>
          Profile Info
        </Popover.Trigger>
        <Popover.Content className="max-w-sm">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" />
            <Button size="sm" className="mr-2">
              Follow
            </Button>
          </div>
          <Typography
            color="default"
            className="mb-1 flex items-center gap-2 font-bold"
          >
            <span>Alex Andrew</span> •{" "}
            <Typography as="a" href="#profile-info-popover">
              @alex
            </Typography>
          </Typography>
          <Typography type="small" className="text-foreground">
            Frontend Developer • Major interest in Web Development: motivated to
            achieve measurable results, to deepen my knowledge and improve my
            skills.
          </Typography>
          <hr className="-mx-2.5 my-2.5 border-surface" />
          <div className="flex items-center gap-8">
            <Typography
              type="small"
              color="default"
              className="flex items-center gap-1.5"
            >
              <MapPin className="h-4 w-4" />
              United Kingdom
            </Typography>
            <Typography
              type="small"
              color="default"
              className="flex items-center gap-1.5"
            >
              <City className="h-4 w-4" />
              Material Tailwind
            </Typography>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
