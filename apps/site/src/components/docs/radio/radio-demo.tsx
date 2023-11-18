import { Radio, Typography } from "@material-tailwind/react/dist";

export function RadioDemo() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-2">
        <Radio id="html" name="type" />
        <Typography
          as="label"
          htmlFor="html"
          className="text-gray-500 dark:text-gray-400"
        >
          HTML
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="react" name="type" />
        <Typography
          as="label"
          htmlFor="react"
          className="text-gray-500 dark:text-gray-400"
        >
          React
        </Typography>
      </div>
    </div>
  );
}
