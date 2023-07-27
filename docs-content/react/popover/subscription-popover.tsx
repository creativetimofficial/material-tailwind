import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

export function SubscriptionPopover() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button>Subscribe</Button>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6">
          Newsletter Subscription
        </Typography>
        <div className="flex gap-2">
          <Input label="Email Address" />
          <Button variant="gradient">Subscribe</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
