import { Checkbox, Typography } from "@material-tailwind/react/dist";

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
        <Typography as="a" href="#" color="info">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
