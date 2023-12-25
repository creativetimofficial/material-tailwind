import { Input, Typography } from "@material-tailwind/react/dist";

export function InputWithLabel() {
  return (
    <Input className="w-[240px] space-y-1.5">
      <Typography
        as="label"
        htmlFor="email"
        variant="small"
        color="primary"
        className="font-medium"
      >
        Email
      </Typography>
      <Input.Field id="email" type="email" placeholder="someone@example.com" />
    </Input>
  );
}
