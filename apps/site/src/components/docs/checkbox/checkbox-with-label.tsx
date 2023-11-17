import { Checkbox, Typography } from "@material-tailwind/react/dist";

const ID = "checkbox";

export function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={ID} />
      <Typography
        as="label"
        htmlFor={ID}
        className="text-gray-500 dark:text-gray-400"
      >
        Remember Me
      </Typography>
    </div>
  );
}
