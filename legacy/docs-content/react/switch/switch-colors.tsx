import { Switch } from "@material-tailwind/react";

export function SwitchColors() {
  return (
    <div className="flex w-max gap-4">
      <Switch color="blue" defaultChecked />
      <Switch color="red" defaultChecked />
      <Switch color="green" defaultChecked />
      <Switch color="amber" defaultChecked />
      <Switch color="teal" defaultChecked />
      <Switch color="indigo" defaultChecked />
      <Switch color="purple" defaultChecked />
      <Switch color="pink" defaultChecked />
    </div>
  );
}
