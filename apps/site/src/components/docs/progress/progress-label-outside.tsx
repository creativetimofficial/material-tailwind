import { Progress, Typography } from "@material-tailwind/react";

export function ProgressLabelOutside() {
  return (
    <div className="w-full space-y-2">
      <Typography
        color="default"
        className="flex items-center justify-between font-semibold"
      >
        <span>Completed</span>
        <span>50%</span>
      </Typography>
      <Progress value={50}>
        <Progress.Bar />
      </Progress>
    </div>
  );
}
