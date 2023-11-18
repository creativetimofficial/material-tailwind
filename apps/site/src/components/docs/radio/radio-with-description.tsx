import { Radio, Typography } from "@material-tailwind/react/dist";

export function RadioWithDescription() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Radio name="version" id="radio-description-html" />
        <label htmlFor="radio-description-html" className="-translate-y-1">
          <Typography color="gray" className="font-medium">
            HTML Version
          </Typography>
          <Typography
            variant="small"
            className="text-gray-500 dark:text-gray-400"
          >
            @material-tailwind/html, packed with rich components and widgets.
          </Typography>
        </label>
      </div>
      <div className="flex gap-2">
        <Radio name="version" id="radio-description-react" />
        <label htmlFor="radio-description-react" className="-translate-y-1">
          <Typography color="gray" className="font-medium">
            React Version
          </Typography>
          <Typography
            variant="small"
            className="text-gray-500 dark:text-gray-400"
          >
            @material-tailwind/react, packed with rich components and widgets.
          </Typography>
        </label>
      </div>
    </div>
  );
}
