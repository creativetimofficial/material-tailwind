import { Button } from "@material-tailwind/react";

export function ButtonRippleEffect() {
  return (
    <div className="flex w-max gap-4">
      <Button ripple={true}>Ripple Effect On</Button>
      <Button ripple={false}>Ripple Effect Off</Button>
    </div>
  );
}
