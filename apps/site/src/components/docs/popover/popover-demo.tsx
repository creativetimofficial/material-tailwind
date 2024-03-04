import { Popover, Button, Typography } from "@material-tailwind/react/dist";

export function PopoverDemo() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Open</Popover.Trigger>
      <Popover.Content className="max-w-sm">
        <Typography type="small" className="text-gray-600">
          This is a very beautiful popover, show some love.
        </Typography>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
