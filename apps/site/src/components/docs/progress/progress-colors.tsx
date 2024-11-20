import { Progress } from "@material-tailwind/react";

export default function ProgressColors() {
  return (
    <div className="w-full space-y-4">
      <Progress color="primary" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress color="secondary" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress color="info" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress color="success" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress color="warning" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress color="error" value={50}>
        <Progress.Bar />
      </Progress>
    </div>
  );
}
