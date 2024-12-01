import { Input } from "@material-tailwind/react";

export function InputValidations() {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input label="Input Error" error />
      <Input label="Input Success" success />
    </div>
  );
}
