import { Progress, Typography } from "@material-tailwind/react/dist";

export function ProgressLabelInside() {
  return (
    <Progress size="lg" value={50}>
      <Progress.Bar className="grid place-items-center">
        <Typography type="small" color="secondary">
          50% Completed
        </Typography>
      </Progress.Bar>
    </Progress>
  );
}
