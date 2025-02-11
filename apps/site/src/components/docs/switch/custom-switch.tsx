import { Switch } from "@material-tailwind/react";

export default function CustomSwitch() {
  return (
    <Switch className="after:border-2 checked:before:bg-[#2ec946] checked:after:border-[#2ec946]" />
  );
}
