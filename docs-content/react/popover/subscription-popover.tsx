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
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-bold"
        >
          Your Name
        </Typography>
        <div className="flex gap-2">
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button variant="gradient" className="flex-shrink-0">
            Subscribe
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
