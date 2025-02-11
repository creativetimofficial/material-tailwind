import React from "react";
import { Popover, Button, Typography, Chip } from "@material-tailwind/react";
import { CheckCircleSolid, StarSolid } from "iconoir-react";

export default function PopoverWithDescription() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-48">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)}>
          Repository Info
        </Popover.Trigger>
        <Popover.Content className="max-w-sm">
          <div className="mb-1 flex items-center gap-2">
            <Typography
              as="a"
              href="#"
              color="default"
              className="font-bold hover:text-primary"
            >
              @material-tailwind
            </Typography>
            <Chip size="sm" color="primary">
              <Chip.Label>Public</Chip.Label>
            </Chip>
          </div>
          <Typography type="small" className="text-foreground">
            @material-tailwind is an easy-to-use components library for Tailwind
            CSS and Material Design.
          </Typography>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-info" />
              <Typography type="small" color="default">
                TypeScript
              </Typography>
            </div>
            <div className="flex items-center gap-1.5">
              <StarSolid className="h-4 w-4 text-warning" />
              <Typography type="small" color="default">
                1,480
              </Typography>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleSolid className="h-4 w-4 text-success" />
              <Typography type="small" color="default">
                Veritied
              </Typography>
            </div>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
