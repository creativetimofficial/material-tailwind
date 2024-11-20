import { Progress } from "@material-tailwind/react";

export default function ProgressDemo() {
  return (
    <Progress value={50}>
      <Progress.Bar />
    </Progress>
  );
}
