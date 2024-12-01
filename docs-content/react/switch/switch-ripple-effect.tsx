import { Switch } from "@material-tailwind/react";

export function SwitchRippleEffect() {
  return (
    <div className="space-x-8">
      <Switch label="Ripple Effect On" ripple={true} />
      <Switch label="Ripple Effect Off" ripple={false} />
    </div>
  );
}
