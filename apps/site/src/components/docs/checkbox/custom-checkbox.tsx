import { Checkbox } from "@material-tailwind/react/dist";

export function CustomCheckbox() {
  return (
    <Checkbox
      baseClassName="w-7 h-7"
      className="rounded-full bg-gray-200 dark:bg-gray-900"
    />
  );
}
