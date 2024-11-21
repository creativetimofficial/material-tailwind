import { Checkbox } from "@material-tailwind/react";
import { Star, StarSolid } from "iconoir-react";

export function CheckboxWithCustomIcon() {
  return (
    <Checkbox className="border-0 shadow-none hover:shadow-none data-[checked=true]:bg-transparent">
      <Checkbox.Indicator className="relative left-0 top-0 opacity-100">
        <Star className="absolute inset-0 h-5 w-5 text-primary opacity-100 group-data-[checked=true]:opacity-0" />
        <StarSolid className="absolute inset-0 h-5 w-5 text-primary opacity-0 group-data-[checked=true]:opacity-100" />
      </Checkbox.Indicator>
    </Checkbox>
  );
}
