import { Star, StarSolid } from "iconoir-react";
import { Radio, Typography } from "@material-tailwind/react/dist";

const SHARED_CLASSES = "absolute inset-0 h-full w-full";

export function RadioWithCustomIcon() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-2">
        <Radio id="javascript" name="variant">
          <Star
            className={`${SHARED_CLASSES} opacity-100 peer-checked:opacity-0`}
          />
          <StarSolid
            className={`${SHARED_CLASSES} opacity-0 peer-checked:opacity-100`}
          />
        </Radio>
        <Typography
          as="label"
          htmlFor="javascript"
          className="text-gray-500 dark:text-gray-400"
        >
          JavaScript
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="typescript" name="variant">
          <Star
            className={`${SHARED_CLASSES} opacity-100 peer-checked:opacity-0`}
          />
          <StarSolid
            className={`${SHARED_CLASSES} opacity-0 peer-checked:opacity-100`}
          />
        </Radio>
        <Typography
          as="label"
          htmlFor="typescript"
          className="text-gray-500 dark:text-gray-400"
        >
          TypeScript
        </Typography>
      </div>
    </div>
  );
}
