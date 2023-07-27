import { Radio, Typography } from "@material-tailwind/react";

export function RadioWithLink() {
  return (
    <div className="flex flex-col gap-2">
      <Radio
        name="terms"
        label={
          <Typography color="blue-gray" className="flex font-medium">
            I agree with HTML
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
      <Radio
        name="terms"
        label={
          <Typography color="blue-gray" className="flex font-medium">
            I agree with React
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
    </div>
  );
}
