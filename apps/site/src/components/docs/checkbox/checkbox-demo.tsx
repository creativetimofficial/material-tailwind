import { Checkbox, Typography } from "@material-tailwind/react";

export function CheckboxDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="default-checkbox">
          <Checkbox.Indicator />
        </Checkbox>
        <Typography
          as="label"
          htmlFor="default-checkbox"
          className="cursor-pointer text-foreground"
        >
          Default Checkbox
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="checked-checkbox">
          <Checkbox.Indicator />
        </Checkbox>
        <Typography
          as="label"
          htmlFor="checked-checkbox"
          className="cursor-pointer text-foreground"
        >
          Checked Checkbox
        </Typography>
      </div>
    </div>
  );
}
