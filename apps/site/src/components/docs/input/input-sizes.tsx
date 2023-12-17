import { Input } from "@material-tailwind/react/dist";

export function InputSizes() {
  return (
    <div className="w-[240px] space-y-4">
      <Input size="sm">
        <Input.Field placeholder="Input Small" />
      </Input>
      <Input size="md">
        <Input.Field placeholder="Input Medium" />
      </Input>
      <Input size="lg">
        <Input.Field placeholder="Input Large" />
      </Input>
    </div>
  );
}
