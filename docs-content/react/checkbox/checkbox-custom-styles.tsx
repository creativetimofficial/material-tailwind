import { Checkbox } from "@material-tailwind/react";

export function CheckboxCustomStyles() {
  return (
    <Checkbox
      defaultChecked
      ripple={false}
      className="h-8 w-8 rounded-full border-blue-500/50 bg-blue-500/25 transition-all hover:scale-105 hover:before:opacity-0"
    />
  );
}
