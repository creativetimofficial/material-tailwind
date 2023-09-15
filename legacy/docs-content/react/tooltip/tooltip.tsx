import { Tooltip, Button } from "@material-tailwind/react";

export function TooltipDefault() {
  return (
    <Tooltip content="Material Tailwind">
      <Button>Show Tooltip</Button>
    </Tooltip>
  );
}
