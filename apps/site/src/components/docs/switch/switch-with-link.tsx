import { Switch, Typography } from "@material-tailwind/react/dist";

const ID = "switch-link";

export function SwitchWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Switch id={ID} />
      <Typography
        as="label"
        htmlFor={ID}
        className="flex gap-1 text-foreground"
      >
        I agree with the
        <Typography as="a" href="#" color="info">
          terms and conditions
        </Typography>
      </Typography>
    </div>
  );
}
