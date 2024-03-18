import { Switch } from "@material-tailwind/react/dist";

export function CustomSwitch() {
  return (
    <Switch className="after:shadow-sm after:shadow-surface-dark/10 checked:before:bg-[#2ec946]" />
  );
}
