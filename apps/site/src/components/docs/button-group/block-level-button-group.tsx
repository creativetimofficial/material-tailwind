import { ButtonGroup, Button } from "@material-tailwind/react/dist";

export function BlockLevelButtonGroup() {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <ButtonGroup fullWidth variant="ghost">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup fullWidth variant="outline">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup fullWidth variant="solid">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup fullWidth variant="gradient">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
    </div>
  );
}
