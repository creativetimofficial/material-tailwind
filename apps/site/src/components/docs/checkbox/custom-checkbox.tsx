import { Checkbox } from "@material-tailwind/react/dist";

export function CustomCheckbox() {
  return (
    <Checkbox className="rounded-full">
      <Checkbox.Indicator className="scale-75 data-[checked=true]:scale-90" />
    </Checkbox>
  );
}
