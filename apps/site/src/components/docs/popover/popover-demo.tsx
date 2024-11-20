import React from "react";
import { Popover, Button, Typography } from "@material-tailwind/react";

export default function PopoverDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-28">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)}>
          Open
        </Popover.Trigger>
        <Popover.Content className="max-w-sm">
          <Typography type="small" className="text-foreground">
            This is a very beautiful popover, show some love.
          </Typography>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
