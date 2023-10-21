import { ButtonGroup, Button } from "@material-tailwind/react";

export function ButtonGroupRippleEffect() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup ripple={true}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup ripple={false}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}
