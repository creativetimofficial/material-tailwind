import { Switch, Typography } from "@material-tailwind/react";

export default function SwitchWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="switch-link" />
      <Typography
        as="label"
        htmlFor="switch-link"
        className="cursor-pointer text-foreground"
      >
        I agree with the&nbsp;
        <Typography as="a" href="#" color="primary" className="inline">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
