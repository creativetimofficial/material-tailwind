import { Button } from "@material-tailwind/react/dist";

export function RoundedButton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button rounded variant="ghost">
        Ghost
      </Button>
      <Button rounded variant="outline">
        Outline
      </Button>
      <Button rounded variant="solid">
        Solid
      </Button>
      <Button rounded variant="gradient">
        Gradient
      </Button>
    </div>
  );
}
