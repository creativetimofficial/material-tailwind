import { Progress, Typography } from "@material-tailwind/react";

export function ProgressLabelOutside() {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          Completed
        </Typography>
        <Typography color="blue-gray" variant="h6">
          50%
        </Typography>
      </div>
      <Progress value={50} />
    </div>
  );
}
