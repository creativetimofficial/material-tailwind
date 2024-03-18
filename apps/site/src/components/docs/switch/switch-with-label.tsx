import { Switch, Typography } from "@material-tailwind/react/dist";

const ID = "switch";

export function SwitchWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Switch id={ID} />
      <Typography as="label" htmlFor={ID} className="text-foreground">
        Dark Mode
      </Typography>
    </div>
  );
}
