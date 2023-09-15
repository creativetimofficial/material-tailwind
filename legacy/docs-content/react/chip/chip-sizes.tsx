import { Chip } from "@material-tailwind/react";

export function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <Chip size="sm" value="chip small" />
      <Chip size="md" value="chip medium" />
      <Chip size="lg" value="chip large" />
    </div>
  );
}
