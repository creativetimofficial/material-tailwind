import { ButtonGroup, Button } from "@material-tailwind/react";

export default function ButtonGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup size="sm">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup size="md">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
    </div>
  );
}
