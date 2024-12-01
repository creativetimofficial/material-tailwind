import { Radio } from "@material-tailwind/react";

export function RadioColors() {
  return (
    <div className="flex w-max gap-4">
      <Radio name="color" />
      <Radio name="color" color="gray" defaultChecked />
      <Radio name="color" color="blue" />
      <Radio name="color" color="green" />
      <Radio name="color" color="red" />
      <Radio name="color" color="amber" />
      <Radio name="color" disabled color="purple" />
    </div>
  );
}
