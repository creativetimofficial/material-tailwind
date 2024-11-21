import { Switch, Typography } from "@material-tailwind/react";

export function SwitchWithDescription() {
  return (
    <div className="flex gap-4">
      <Switch id="switch-description" />
      <label
        htmlFor="switch-description"
        className="-translate-y-0.5 cursor-pointer"
      >
        <Typography color="default" className="font-semibold">
          Remember Me
        </Typography>
        <Typography type="small" className="text-foreground">
          You&apos;ll be able to login without password for 24 hours.
        </Typography>
      </label>
    </div>
  );
}
