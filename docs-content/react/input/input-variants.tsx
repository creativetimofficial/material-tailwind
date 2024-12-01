import { Input } from "@material-tailwind/react";

export function InputVariants() {
  return (
    <div className="flex w-72 flex-col gap-6">
      <Input variant="static" label="Static" placeholder="Static" />
      <Input variant="standard" label="Standard" placeholder="Standard" />
      <Input variant="outlined" label="Outlined" placeholder="Outlined" />
    </div>
  );
}
