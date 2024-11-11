import { Input } from "@material-tailwind/react";

export function InputSizes() {
  return (
    <div className="w-72 space-y-4">
      <Input size="sm" placeholder="Input Small" />
      <Input size="md" placeholder="Input Medium" />
      <Input size="lg" placeholder="Input Large" />
    </div>
  );
}
