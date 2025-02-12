import { Textarea } from "@material-tailwind/react";

export default function TextareaSizes() {
  return (
    <div className="w-full space-y-4">
      <Textarea size="sm" placeholder="Textarea Small" />
      <Textarea size="md" placeholder="Textarea Medium" />
      <Textarea size="lg" placeholder="Textarea Large" />
    </div>
  );
}
