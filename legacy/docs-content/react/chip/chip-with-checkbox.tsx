import { Chip, Checkbox } from "@material-tailwind/react";

export function ChipWithCheckbox() {
  return (
    <div className="flex gap-2">
      <Chip
        value="Online"
        variant="ghost"
        color="green"
        icon={
          <Checkbox
            color="green"
            ripple={false}
            containerProps={{ className: "p-0" }}
            className="-ml-px border-2 border-green-900 before:hidden checked:border-green-900 checked:bg-green-900"
          />
        }
      />
      <Chip
        value="Offline"
        variant="ghost"
        color="red"
        icon={
          <Checkbox
            color="red"
            ripple={false}
            containerProps={{ className: "p-0" }}
            className="-ml-px border-2 border-red-900 before:hidden checked:border-red-900 checked:bg-red-900"
          />
        }
      />
    </div>
  );
}
