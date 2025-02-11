import { Button } from "@material-tailwind/react";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <Button size="xs">X Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">X Large</Button>
    </div>
  );
}
