import { Input, Typography } from "@material-tailwind/react";

export function InputWithLabel() {
  return (
    <Input className="w-72 space-y-1.5">
      <Typography
        as="label"
        htmlFor="email"
        type="small"
        color="primary"
        className="font-semibold"
      >
        Email
      </Typography>
      <Input.Field id="email" type="email" placeholder="someone@example.com" />
    </Input>
  );
}
