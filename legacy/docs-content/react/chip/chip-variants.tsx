import { Chip } from "@material-tailwind/react";

export function ChipVariants() {
  return (
    <div className="flex gap-2">
      <Chip value="chip filled" />
      <Chip variant="gradient" value="chip gradient" />
      <Chip variant="outlined" value="chip outlined" />
      <Chip variant="ghost" value="chip ghost" />
    </div>
  );
}
