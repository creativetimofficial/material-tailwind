import { Checkbox } from "@material-tailwind/react";

export function CheckboxRippleEffect() {
  return (
    <>
      <Checkbox id="ripple-on" label="Ripple Effect On" ripple={true} />
      <Checkbox id="ripple-off" label="Ripple Effect Off" ripple={false} />
    </>
  );
}
