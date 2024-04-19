import { Chip } from "@material-tailwind/react";

export function ChipVariants() {
  return (
    <div className="flex items-center gap-2">
      <Chip variant="ghost">
        <Chip.Label>Ghost</Chip.Label>
      </Chip>
      <Chip variant="outline">
        <Chip.Label>Outline</Chip.Label>
      </Chip>
      <Chip variant="solid">
        <Chip.Label>Solid</Chip.Label>
      </Chip>
      <Chip variant="gradient">
        <Chip.Label>Gradient</Chip.Label>
      </Chip>
    </div>
  );
}
