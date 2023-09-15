import { Textarea } from "@material-tailwind/react";

export function TextareaDisabled() {
  return (
    <div className="w-96">
      <Textarea label="Disabled" disabled />
    </div>
  );
}
