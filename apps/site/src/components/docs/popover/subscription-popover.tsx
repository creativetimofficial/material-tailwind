import { Popover, Button, Typography, Input } from "@material-tailwind/react";

export function SubscriptionPopover() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Subscribe</Popover.Trigger>
      <Popover.Content className="w-96">
        <Typography color="default" className="font-bold">
          Newsletter Subscription
        </Typography>
        <form
          action="#"
          className="mt-3 flex w-full items-center justify-center gap-2"
        >
          <Input>
            <Input.Field type="email" placeholder="someone@example.com" />
          </Input>
          <Button type="submit">Subscribe</Button>
        </form>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
