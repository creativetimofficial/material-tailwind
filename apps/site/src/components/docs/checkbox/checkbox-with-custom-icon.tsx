import { Checkbox } from "@material-tailwind/react/dist";
import { Star, StarSolid } from "iconoir-react";

export function CheckboxWithCustomIcon() {
  return (
    <Checkbox className="bg-transparent data-[checked]:bg-transparent">
      <Checkbox.Indicator className="group relative left-0 top-0 bg-red-500 opacity-100">
        <Star className="absolute inset-0 h-5 w-5 text-primary opacity-100 group-data-[checked=true]:opacity-0" />
        <StarSolid className="absolute inset-0 h-5 w-5 text-primary opacity-0 group-data-[checked=true]:opacity-100" />
      </Checkbox.Indicator>
    </Checkbox>
  );
}
