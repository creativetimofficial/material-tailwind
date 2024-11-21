import { Checkbox } from "@material-tailwind/react";

export function CheckboxColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Checkbox color="primary">
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox color="secondary">
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox color="info">
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox color="success">
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox color="warning">
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox color="error">
        <Checkbox.Indicator />
      </Checkbox>
    </div>
  );
}
