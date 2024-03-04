import { Checkbox, Typography } from "@material-tailwind/react/dist";

const ID = "checkbox-description";

export function CheckboxWithDescription() {
  return (
    <div className="flex gap-2">
      <Checkbox id={ID} />
      <label htmlFor={ID} className="-translate-y-1">
        <Typography color="gray" className="font-semibold">
          Remember Me
        </Typography>
        <Typography type="small" className="text-gray-500">
          You&apos;ll be able to login without password for 24 hours.
        </Typography>
      </label>
    </div>
  );
}
