import { Switch } from "@material-tailwind/react/dist";

export function SwitchColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Switch color="primary" />
      <Switch color="secondary" />
      <Switch color="info" />
      <Switch color="success" />
      <Switch color="warning" />
      <Switch color="error" />
    </div>
  );
}
