import { Progress } from "@material-tailwind/react";

export function ProgressColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={50} color="blue" />
      <Progress value={50} color="red" />
      <Progress value={50} color="green" />
      <Progress value={50} color="amber" />
      <Progress value={50} color="teal" />
      <Progress value={50} color="indigo" />
      <Progress value={50} color="purple" />
      <Progress value={50} color="pink" />
    </div>
  );
}
