import { Progress } from "@material-tailwind/react";

export function ProgressSizes() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={25} size="sm" />
      <Progress value={50} size="md" />
      <Progress value={75} size="lg" />
    </div>
  );
}
