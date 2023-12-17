import { Star, StarSolid } from "iconoir-react";
import { Checkbox } from "@material-tailwind/react/dist";

const SHARED_CLASSES = "absolute inset-0 h-full w-full";

export function CheckboxWithCustomIcon() {
  return (
    <Checkbox>
      <Star
        className={`${SHARED_CLASSES} opacity-100 peer-checked:opacity-0`}
      />
      <StarSolid
        className={`${SHARED_CLASSES} opacity-0 peer-checked:opacity-100`}
      />
    </Checkbox>
  );
}
