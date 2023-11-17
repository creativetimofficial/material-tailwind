import { Star } from "iconoir-react";
import { Checkbox } from "@material-tailwind/react/dist";

export function CheckboxWithCustomIcon() {
  return <Checkbox icon={<Star className="h-3 w-3 stroke-2" />} />;
}
