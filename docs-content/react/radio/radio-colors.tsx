import { Radio } from "@material-tailwind/react";

export function RadioColors() {
  return (
    <div className="flex w-max gap-4">
      <Radio name="color" color="blue" defaultChecked />
      <Radio name="color" color="red" />
      <Radio name="color" color="green" />
      <Radio name="color" color="amber" />
      <Radio name="color" color="teal" />
      <Radio name="color" color="indigo" />
      <Radio name="color" color="purple" />
      <Radio name="color" color="pink" />
    </div>
  );
}
