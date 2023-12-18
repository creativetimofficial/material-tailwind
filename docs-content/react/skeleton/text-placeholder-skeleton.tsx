import { Typography } from "@material-tailwind/react";

export function TextPlacehoderSkeleton() {
  return (
    <div className="max-w-lg animate-pulse space-y-2.5">
      <div className="flex w-full items-center">
        <Typography
          variant="h1"
          className="h-3 w-80 rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>
      </div>
      <div className="flex w-full max-w-md items-center">
        <Typography
          variant="paragraph"
          className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>

        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
      </div>
      <div className="flex w-full max-w-md items-center">
        <Typography
          variant="paragraph"
          className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
      </div>
      <div className="flex w-full max-w-md items-center">
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
      </div>
      <div className="flex w-full max-w-md items-center">
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>
      </div>
      <div className="flex w-full max-w-md items-center">
        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>

        <Typography
          variant="paragraph"
          className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"
        ></Typography>
      </div>
      <Typography variant="small" className="sr-only">
        Loading...
      </Typography>
    </div>
  );
}
