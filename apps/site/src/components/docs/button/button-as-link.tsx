import { Button } from "@material-tailwind/react";

export default function ButtonAsLink() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button as="a" href="#" variant="ghost">
        Ghost
      </Button>
      <Button as="a" href="#" variant="outline">
        Outline
      </Button>
      <Button as="a" href="#" variant="solid">
        Solid
      </Button>
      <Button as="a" href="#" variant="gradient">
        Gradient
      </Button>
    </div>
  );
}
