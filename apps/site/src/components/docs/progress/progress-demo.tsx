import { Progress } from "@material-tailwind/react/dist";

export function ProgressDemo() {
  return (
    <Progress value={50}>
      <Progress.Bar />
    </Progress>
  );
}
