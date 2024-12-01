import { Input } from "@material-tailwind/react";

export function InputDisabled() {
  return (
    <div className="w-72">
      <Input label="Disabled" disabled />
    </div>
  );
}
