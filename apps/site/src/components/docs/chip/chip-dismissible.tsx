import { Chip } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export function ChipDismissible() {
  return (
    <Chip>
      <Chip.Icon>
        <ProfileCircle className="w-full h-full" />
      </Chip.Icon>
      <Chip.Label>Material Tailwind</Chip.Label>
      <Chip.DismissTrigger />
    </Chip>
  );
}
