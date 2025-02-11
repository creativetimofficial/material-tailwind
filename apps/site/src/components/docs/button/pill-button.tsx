import { Button } from "@material-tailwind/react";

export default function PillButton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button isPill variant="ghost">
        Ghost
      </Button>
      <Button isPill variant="outline">
        Outline
      </Button>
      <Button isPill variant="solid">
        Solid
      </Button>
      <Button isPill variant="gradient">
        Gradient
      </Button>
    </div>
  );
}
