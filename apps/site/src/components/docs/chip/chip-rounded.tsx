import { Chip } from "@material-tailwind/react";

export default function ChipRounded() {
  return (
    <div className="flex items-center gap-2">
      <Chip isPill={false} variant="ghost">
        <Chip.Label>Ghost</Chip.Label>
      </Chip>
      <Chip isPill={false} variant="outline">
        <Chip.Label>Outline</Chip.Label>
      </Chip>
      <Chip isPill={false} variant="solid">
        <Chip.Label>Solid</Chip.Label>
      </Chip>
      <Chip isPill={false} variant="gradient">
        <Chip.Label>Gradient</Chip.Label>
      </Chip>
    </div>
  );
}
