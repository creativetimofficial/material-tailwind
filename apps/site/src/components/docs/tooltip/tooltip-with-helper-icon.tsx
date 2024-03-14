import { Tooltip, IconButton, Typography } from "@material-tailwind/react/dist";
import { InfoCircle } from "iconoir-react";

export function TooltipWithHelperIcon() {
  return (
    <Tooltip>
      <Tooltip.Trigger as={IconButton} variant="ghost">
        <InfoCircle className="w-5 h-5" />
      </Tooltip.Trigger>
      <Tooltip.Content className="w-80 px-2.5 py-1.5 text-primary-foreground">
        <Typography className="font-semibold">Material Tailwind</Typography>
        <Typography type="small" className="opacity-80">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design.
        </Typography>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
}
