import React from "react";
import { Popover, Button, Typography, Input } from "@material-tailwind/react";

export default function SubscriptionPopover() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-40">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)}>
          Subscribe
        </Popover.Trigger>
        <Popover.Content className="w-96">
          <Typography color="default" className="font-bold">
            Newsletter Subscription
          </Typography>
          <form
            action="#"
            className="mt-3 flex w-full items-center justify-center gap-2"
          >
            <Input type="email" placeholder="someone@example.com" />
            <Button type="submit">Subscribe</Button>
          </form>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
