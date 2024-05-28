import { Switch } from "@material-tailwind/react";

export function CustomSwitch() {
  return (
    <Switch className="after:shadow-sm after:shadow-black/10 checked:before:bg-[#2ec946]" />
  );
}
