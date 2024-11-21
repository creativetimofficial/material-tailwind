import { Checkbox, Typography } from "@material-tailwind/react";

export function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox">
        <Checkbox.Indicator />
      </Checkbox>
      <Typography
        as="label"
        htmlFor="checkbox"
        className="cursor-pointer text-foreground"
      >
        Remember Me
      </Typography>
    </div>
  );
}
