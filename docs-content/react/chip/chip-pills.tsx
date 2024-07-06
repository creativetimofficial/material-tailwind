import { Chip } from "@material-tailwind/react";

export function ChipPills() {
  return (
    <div className="flex gap-2">
      <Chip value="chip filled" className="rounded-full" />
      <Chip variant="gradient" value="chip gradient" className="rounded-full" />
      <Chip variant="outlined" value="chip outlined" className="rounded-full" />
      <Chip variant="ghost" value="chip ghost" className="rounded-full" />
    </div>
  );
}
