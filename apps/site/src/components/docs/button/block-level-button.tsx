import { Button } from "@material-tailwind/react";

export default function BlockLevelButton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Button isFullWidth variant="ghost">
        Ghost Block Level Button
      </Button>
      <Button isFullWidth variant="outline">
        Outline Block Level Button
      </Button>
      <Button isFullWidth variant="solid">
        Solid Block Level Button
      </Button>
      <Button isFullWidth variant="gradient">
        Gradient Block Level Button
      </Button>
    </div>
  );
}
