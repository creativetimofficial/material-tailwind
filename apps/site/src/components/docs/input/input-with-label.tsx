import { Input, Typography } from "@material-tailwind/react/dist";

export function InputWithLabel() {
  return (
    <div className="w-[240px] space-y-1.5">
      <Typography
        as="label"
        htmlFor="email"
        variant="small"
        color="primary"
        className="font-medium"
      >
        Email
      </Typography>
      <Input id="email" type="email" placeholder="someone@example.com" />
    </div>
  );
}
