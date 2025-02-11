import { ButtonGroup, Button } from "@material-tailwind/react";

export default function BlockLevelButtonGroup() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ButtonGroup isFullWidth variant="ghost">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isFullWidth variant="outline">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isFullWidth variant="solid">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup isFullWidth variant="gradient">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
    </div>
  );
}
