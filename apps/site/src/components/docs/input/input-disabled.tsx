import { Input } from "@material-tailwind/react";

export function InputDisabled() {
  return (
    <Input disabled className="w-72">
      <Input.Field placeholder="Input" />
    </Input>
  );
}
