import { Checkbox } from "@material-tailwind/react/dist";

export function CustomCheckbox() {
  return (
    <Checkbox
      iconClassName="scale-50 peer-checked:scale-75"
      inputClassName="rounded-full bg-gray-200"
    />
  );
}
