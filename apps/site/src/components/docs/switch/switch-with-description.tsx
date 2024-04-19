import { Switch, Typography } from "@material-tailwind/react";

const ID = "switch-description";

export function SwitchWithDescription() {
  return (
    <div className="flex gap-2">
      <Switch id={ID} />
      <label htmlFor={ID} className="-translate-y-1">
        <Typography color="gray" className="font-semibold">
          Remember Me
        </Typography>
        <Typography type="small" className="text-foreground">
          You&apos;ll be able to login without password for 24 hours.
        </Typography>
      </label>
    </div>
  );
}
