import { Textarea } from "@material-tailwind/react";

export function TextareaColors() {
  return (
    <div className="flex w-96 flex-col gap-6">
      <Textarea color="gray" label="Textarea Gray" />
      <Textarea color="blue-gray" label="Textarea Purple" />
      <Textarea color="red" label="Textarea Red" />
      <Textarea color="green" label="Textarea Green" />
    </div>
  );
}
