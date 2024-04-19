import { Tooltip, Button, Typography } from "@material-tailwind/react";

export function TooltipCustomStyles() {
  return (
    <Tooltip placement="bottom">
      <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
      <Tooltip.Content className="w-80 border border-surface bg-background px-3 py-2.5 text-foreground">
        <Typography color="primary" className="data-[type=p]:font-semibold">
          Material Tailwind
        </Typography>
        <Typography type="small" className="text-foreground">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design.
        </Typography>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
}
