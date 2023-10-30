import { ButtonGroup, Button } from "@material-tailwind/react/dist";

export function RoundedButtonGroup() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <ButtonGroup rounded variant="ghost">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup rounded variant="outline">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup rounded variant="solid">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup rounded variant="gradient">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
    </div>
  );
}
