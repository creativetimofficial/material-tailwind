import { Tooltip, Button, Typography } from "@material-tailwind/react";

export default function TooltipCustomStyles() {
  return (
    <Tooltip placement="bottom">
      <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
      <Tooltip.Content className="w-80 border border-surface bg-background px-3 py-2.5 text-foreground">
        <Typography className="font-semibold text-black">
          Material Tailwind
        </Typography>
        <Typography type="small" className="text-black/80">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design.
        </Typography>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
}
