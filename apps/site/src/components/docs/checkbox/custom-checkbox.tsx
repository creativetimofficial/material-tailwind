import { Checkbox } from "@material-tailwind/react/dist";

export function CustomCheckbox() {
  return (
    <Checkbox
      iconClassName="scale-50 peer-checked:scale-75"
      className="rounded-full bg-gray-200 dark:bg-gray-900"
    />
  );
}
