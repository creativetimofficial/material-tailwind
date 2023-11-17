import { Checkbox } from "@material-tailwind/react/dist";

export function CheckboxColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Checkbox color="primary" />
      <Checkbox color="secondary" />
      <Checkbox color="info" />
      <Checkbox color="success" />
      <Checkbox color="warning" />
      <Checkbox color="error" />
    </div>
  );
}
