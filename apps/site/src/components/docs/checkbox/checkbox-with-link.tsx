import { Checkbox, Typography } from "@material-tailwind/react";

export function CheckboxWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-link">
        <Checkbox.Indicator />
      </Checkbox>
      <Typography
        as="label"
        htmlFor="checkbox-link"
        className="flex gap-1 text-foreground"
      >
        I agree with the
        <Typography as="a" href="#" color="primary">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
