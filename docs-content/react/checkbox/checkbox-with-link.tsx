import { Checkbox, Typography } from "@material-tailwind/react";

export function CheckboxWithLink() {
  return (
    <Checkbox
      label={
        <Typography color="blue-gray" className="flex font-medium">
          I agree with the
          <Typography
            as="a"
            href="#"
            color="blue"
            className="font-medium transition-colors hover:text-blue-700"
          >
            &nbsp;terms and conditions
          </Typography>
          .
        </Typography>
      }
    />
  );
}
