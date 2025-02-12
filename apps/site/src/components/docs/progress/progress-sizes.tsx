import { Progress } from "@material-tailwind/react";

export default function ProgressSizes() {
  return (
    <div className="w-full space-y-6">
      <Progress size="sm" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress size="md" value={50}>
        <Progress.Bar />
      </Progress>
      <Progress size="lg" value={50}>
        <Progress.Bar />
      </Progress>
    </div>
  );
}
