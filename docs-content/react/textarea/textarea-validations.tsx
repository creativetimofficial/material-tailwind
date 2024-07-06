import { Textarea } from "@material-tailwind/react";

export function TextareaValidations() {
  return (
    <div className="flex w-96 flex-col gap-6">
      <Textarea label="Textarea Error" error />
      <Textarea label="Textarea Success" success />
    </div>
  );
}
