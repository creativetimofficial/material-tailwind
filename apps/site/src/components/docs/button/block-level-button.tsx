import { Button } from "@material-tailwind/react/dist";

export function BlockLevelButton() {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <Button fullWidth variant="ghost">
        Ghost Block Level Button
      </Button>
      <Button fullWidth variant="outline">
        Outline Block Level Button
      </Button>
      <Button fullWidth variant="solid">
        Solid Block Level Button
      </Button>
      <Button fullWidth variant="gradient">
        Gradient Block Level Button
      </Button>
    </div>
  );
}
