import { Input } from "@material-tailwind/react/dist";

export function InputDisabled() {
  return (
    <Input disabled>
      <Input.Field placeholder="Input" />
    </Input>
  );
}
