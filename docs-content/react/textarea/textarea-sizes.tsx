import { Textarea } from "@material-tailwind/react";

export function TextareaSizes() {
  return (
    <div className="flex w-96 flex-col gap-6">
      <Textarea size="md" label="Textarea Medium" />
      <Textarea size="lg" label="Textarea Large" />
    </div>
  );
}
