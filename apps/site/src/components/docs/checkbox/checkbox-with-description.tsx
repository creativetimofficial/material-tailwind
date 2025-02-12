import { Checkbox, Typography } from "@material-tailwind/react";

export default function CheckboxWithDescription() {
  return (
    <div className="flex gap-2">
      <Checkbox id="checkbox-description">
        <Checkbox.Indicator />
      </Checkbox>
      <label
        htmlFor="checkbox-description"
        className="-translate-y-0.5 cursor-pointer"
      >
        <Typography className="font-semibold">Remember Me</Typography>
        <Typography type="small" className="text-foreground">
          You&apos;ll be able to login without password for 24 hours.
        </Typography>
      </label>
    </div>
  );
}
