import { Checkbox } from "@material-tailwind/react";

export function CheckboxColors() {
  return (
    <div className="flex w-max gap-4">
      <Checkbox color="blue" defaultChecked />
      <Checkbox color="red" defaultChecked />
      <Checkbox color="green" defaultChecked />
      <Checkbox color="amber" defaultChecked />
      <Checkbox color="teal" defaultChecked />
      <Checkbox color="indigo" defaultChecked />
      <Checkbox color="purple" defaultChecked />
      <Checkbox color="pink" defaultChecked />
    </div>
  );
}
