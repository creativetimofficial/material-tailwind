import { Checkbox, Typography } from "@material-tailwind/react/dist";

const ID = "checkbox-link";

export function CheckboxWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={ID} />
      <Typography
        as="label"
        htmlFor={ID}
        className="flex gap-1 text-gray-500 dark:text-gray-400"
      >
        I agree with the
        <Typography as="a" href="#" color="info">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
