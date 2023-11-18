import { Radio, Typography } from "@material-tailwind/react/dist";

export function DisabledRadio() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-2">
        <Radio id="light" name="type" disabled />
        <Typography
          as="theme"
          htmlFor="light"
          className="pointer-events-none select-none text-gray-500/50 dark:text-gray-400/50"
        >
          Light
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="dark" name="type" disabled />
        <Typography
          as="theme"
          htmlFor="dark"
          className="pointer-events-none select-none text-gray-500/50 dark:text-gray-400/50"
        >
          Dark
        </Typography>
      </div>
    </div>
  );
}
