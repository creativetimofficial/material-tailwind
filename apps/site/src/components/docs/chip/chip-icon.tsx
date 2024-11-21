import { Chip } from "@material-tailwind/react";
import { ProfileCircle } from "iconoir-react";

export function ChipIcon() {
  return (
    <div className="flex items-center gap-2">
      <Chip variant="ghost">
        <Chip.Icon>
          <ProfileCircle className="h-full w-full" />
        </Chip.Icon>
        <Chip.Label>Ghost</Chip.Label>
      </Chip>
      <Chip variant="outline">
        <Chip.Icon>
          <ProfileCircle className="h-full w-full" />
        </Chip.Icon>
        <Chip.Label>Outline</Chip.Label>
      </Chip>
      <Chip variant="solid">
        <Chip.Icon>
          <ProfileCircle className="h-full w-full" />
        </Chip.Icon>
        <Chip.Label>Solid</Chip.Label>
      </Chip>
      <Chip variant="gradient">
        <Chip.Icon>
          <ProfileCircle className="h-full w-full" />
        </Chip.Icon>
        <Chip.Label>Gradient</Chip.Label>
      </Chip>
    </div>
  );
}
