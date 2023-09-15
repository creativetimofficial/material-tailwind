import { Textarea } from "@material-tailwind/react";

export function TextareaVariants() {
  return (
    <div className="flex w-96 flex-col gap-6">
      <Textarea variant="static" label="Static" placeholder="Static" />
      <Textarea variant="standard" label="Standard" />
      <Textarea variant="outlined" label="Outlined" />
    </div>
  );
}
