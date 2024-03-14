import { Tooltip, Button } from "@material-tailwind/react/dist";

export function TooltipCustomStyles() {
  return (
    <Tooltip placement="bottom">
      <Tooltip.Trigger as={Button} color="info">
        Hover
      </Tooltip.Trigger>
      <Tooltip.Content className="w-80 bg-info px-2.5 py-1.5 text-info-foreground">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design.
        <Tooltip.Arrow className="border-info" />
      </Tooltip.Content>
    </Tooltip>
  );
}
