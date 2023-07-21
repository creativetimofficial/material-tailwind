import { Progress } from "@material-tailwind/react";

export function ProgressCustomStyles() {
  return (
    <Progress
      value={50}
      size="lg"
      className="border border-blue-500/20 bg-blue-500/10 p-1"
    />
  );
}
