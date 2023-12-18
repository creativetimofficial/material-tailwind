import { Typography } from "@material-tailwind/react";

export function DefaultSkeleton() {
  return (
    <div className="max-w-full animate-pulse">
      <Typography
        variant="h1"
        className="mb-4 h-2.5 w-52 rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography
        variant="h3"
        className="mb-2.5 h-2 w-72 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography
        variant="h3"
        className="mb-2.5 h-2 w-64 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography
        variant="h3"
        className="mb-2.5 h-2 w-72 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography
        variant="h3"
        className="mb-2.5 h-2 w-60 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography
        variant="h3"
        className="h-2 w-72 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"
      ></Typography>
      <Typography variant="small" className="sr-only">
        Loading...
      </Typography>
    </div>
  );
}
