import { Textarea } from "@material-tailwind/react";

export function TextareaColors() {
  return (
    <div className="flex w-96 flex-col gap-6">
      <Textarea color="blue" label="Textarea Blue" />
      <Textarea color="purple" label="Textarea Purple" />
      <Textarea color="indigo" label="Textarea Indigo" />
      <Textarea color="teal" label="Textarea Teal" />
    </div>
  );
}
