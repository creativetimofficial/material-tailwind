import { Input, Typography } from "@material-tailwind/react";

export function InputWithLabel() {
  return (
    <div className="w-72 space-y-1">
      <Typography
        as="label"
        htmlFor="email"
        type="small"
        color="default"
        className="font-semibold"
      >
        Email
      </Typography>
      <Input id="email" type="email" placeholder="someone@example.com" />
    </div>
  );
}
