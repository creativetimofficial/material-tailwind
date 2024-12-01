import { ButtonGroup, Button } from "@material-tailwind/react";

export function ButtonGroupSizes() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup size="sm">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="md">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}
