import { Switch } from "@material-tailwind/react/dist";

export function CustomSwitch() {
  return (
    <Switch className="after:shadow-sm after:shadow-black/10 checked:before:bg-[#2ec946] dark:before:bg-slate-700 dark:after:bg-white dark:checked:before:bg-[#2ec946]" />
  );
}
