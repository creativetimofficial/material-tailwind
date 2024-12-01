import { Radio } from "@material-tailwind/react";

export function RadioRippleEffect() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="Ripple Effect On" ripple={true} />
      <Radio name="type" label="Ripple Effect Off" ripple={false} />
    </div>
  );
}
