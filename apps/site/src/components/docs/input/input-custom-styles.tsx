import { Input } from "@material-tailwind/react/dist";

export function InputCustomStyles() {
  return (
    <Input
      placeholder="Username"
      inputClassName="rounded-none border-0 border-b border-gray-400 px-0.5 ring-0 hover:border-gray-900 focus:border-gray-900"
    />
  );
}
