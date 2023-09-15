import { Radio } from "@material-tailwind/react";

export function RadioDisabled() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="HTML" disabled />
      <Radio name="type" label="React" disabled defaultChecked />
    </div>
  );
}
