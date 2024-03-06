import { Checkbox, Typography } from "@material-tailwind/react/dist";

export function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox">
        <Checkbox.Indicator />
      </Checkbox>
      <Typography as="label" htmlFor="checkbox" className="text-gray-500">
        Remember Me
      </Typography>
    </div>
  );
}
