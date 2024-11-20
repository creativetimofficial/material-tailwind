import { Switch, Typography } from "@material-tailwind/react";

export default function SwitchWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="switch" />
      <Typography
        as="label"
        htmlFor="switch"
        className="cursor-pointer text-foreground"
      >
        Dark Mode
      </Typography>
    </div>
  );
}
