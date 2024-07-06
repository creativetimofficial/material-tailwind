import { Input } from "@material-tailwind/react";

export function InputSizes() {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input size="md" label="Input Medium" />
      <Input size="lg" label="Input Large" />
    </div>
  );
}
