import { Button } from "@material-tailwind/react/dist";

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
