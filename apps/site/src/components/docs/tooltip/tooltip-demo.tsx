import { Tooltip, Button } from "@material-tailwind/react/dist";

export function TooltipDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
      <Tooltip.Content>
        Material Tailwind
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
}
