import { Progress } from "@material-tailwind/react";

export function ProgressDemo() {
  return (
    <Progress value={50}>
      <Progress.Bar />
    </Progress>
  );
}
