import { Button } from "@material-tailwind/react";

export function ButtonSizes() {
  return (
    <div className="flex w-max items-end gap-4">
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
    </div>
  );
}
