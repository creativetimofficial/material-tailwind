import { ButtonGroup, Button } from "@material-tailwind/react";

export function PillButtonGroup() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup isPill variant="ghost">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isPill variant="outline">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isPill variant="solid">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isPill variant="gradient">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
    </div>
  );
}
