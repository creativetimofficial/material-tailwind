import { Check } from "iconoir-react";
import { Radio, Typography } from "@material-tailwind/react/dist";

export function CustomRadio() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-2">
        <Radio
          id="black"
          name="color"
          className="rounded"
          inputClassName="rounded bg-gray-200"
          icon={<Check className="h-4 w-4 stroke-2" />}
        />
        <Typography as="label" htmlFor="black" className="text-gray-500">
          Black
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="white"
          name="color"
          className="rounded"
          inputClassName="rounded bg-gray-200"
          icon={<Check className="h-4 w-4 stroke-2" />}
        />
        <Typography as="label" htmlFor="white" className="text-gray-500">
          White
        </Typography>
      </div>
    </div>
  );
}
