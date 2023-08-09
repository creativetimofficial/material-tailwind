import { Progress } from "@material-tailwind/react";

export function ProgressCustomStyles() {
  return (
    <Progress
      value={50}
      size="lg"
      className="border border-gray-900/10 bg-gray-900/5 p-1"
    />
  );
}
