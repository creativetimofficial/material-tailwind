import { Radio, Typography } from "@material-tailwind/react";

export function RadioWithLink() {
  return (
    <div className="flex flex-col gap-2">
      <Radio
        name="terms"
        label={
          <Typography
            color="blue-gray"
            className="flex font-medium text-blue-gray-500"
          >
            I agree with HTML
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="hover:text-blueg-gray-900 font-medium transition-colors"
            >
              &nbsp;terms and conditions
            </Typography>
            .
          </Typography>
        }
      />
      <Radio
        name="terms"
        label={
          <Typography
            color="blue-gray"
            className="flex font-medium text-blue-gray-500"
          >
            I agree with HTML
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="hover:text-blueg-gray-900 font-medium transition-colors"
            >
              &nbsp;terms and conditions
            </Typography>
            .
          </Typography>
        }
      />
    </div>
  );
}
