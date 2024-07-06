import { Progress } from "@material-tailwind/react";

export function ProgressVariants() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={50} variant="filled" />
      <Progress value={50} variant="gradient" />
    </div>
  );
}
