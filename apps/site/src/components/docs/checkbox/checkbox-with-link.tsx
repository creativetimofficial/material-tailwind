import { Checkbox, Typography } from "@material-tailwind/react";

export default function CheckboxWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-link">
        <Checkbox.Indicator />
      </Checkbox>
      <Typography
        as="label"
        htmlFor="checkbox-link"
        className="cursor-pointer text-foreground"
      >
        I agree with the&nbsp;
        <Typography as="a" href="#" color="primary" className="inline">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
