import { Button } from "@material-tailwind/react";

export function ButtonRounded() {
  return (
    <div className="flex items-center gap-4">
      <Button className="rounded-full">Filled</Button>
      <Button variant="gradient" className="rounded-full">
        Gradient
      </Button>
      <Button variant="outlined" className="rounded-full">
        Outlined
      </Button>
      <Button variant="text" className="rounded-full">
        Text
      </Button>
    </div>
  );
}
