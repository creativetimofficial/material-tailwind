import { Chip } from "@material-tailwind/react";

export function ChipColors() {
  return (
    <div className="flex items-center gap-2">
      <Chip color="primary">
        <Chip.Label>Primary</Chip.Label>
      </Chip>
      <Chip color="secondary">
        <Chip.Label>Secondary</Chip.Label>
      </Chip>
      <Chip color="info">
        <Chip.Label>Info</Chip.Label>
      </Chip>
      <Chip color="success">
        <Chip.Label>Success</Chip.Label>
      </Chip>
      <Chip color="warning">
        <Chip.Label>Warning</Chip.Label>
      </Chip>
      <Chip color="error">
        <Chip.Label>Error</Chip.Label>
      </Chip>
    </div>
  );
}
