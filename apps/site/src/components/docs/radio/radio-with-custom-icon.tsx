import { Check } from "iconoir-react";
import { Radio, Typography } from "@material-tailwind/react/dist";

export function RadioWithCustomIcon() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-2">
        <Radio
          id="male"
          name="gender"
          icon={<Check className="h-4 w-4 stroke-2" />}
        />
        <Typography
          as="label"
          htmlFor="male"
          className="text-gray-500 dark:text-gray-400"
        >
          Male
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="female"
          name="gender"
          icon={<Check className="h-4 w-4 stroke-2" />}
        />
        <Typography
          as="label"
          htmlFor="female"
          className="text-gray-500 dark:text-gray-400"
        >
          Female
        </Typography>
      </div>
    </div>
  );
}
