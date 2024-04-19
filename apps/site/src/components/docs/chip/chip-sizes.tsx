import { Chip } from "@material-tailwind/react";

export function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <Chip size="sm">
        <Chip.Label>Small</Chip.Label>
      </Chip>
      <Chip size="md">
        <Chip.Label>Medium</Chip.Label>
      </Chip>
      <Chip size="lg">
        <Chip.Label>Large</Chip.Label>
      </Chip>
    </div>
  );
}
