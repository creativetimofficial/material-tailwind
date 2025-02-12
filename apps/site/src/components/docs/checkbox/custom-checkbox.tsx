import { Checkbox } from "@material-tailwind/react";

export default function CustomCheckbox() {
  return (
    <Checkbox className="rounded-full">
      <Checkbox.Indicator className="scale-75 data-[checked=true]:scale-90" />
    </Checkbox>
  );
}
