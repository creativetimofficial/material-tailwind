import { Input } from "@material-tailwind/react";

export function InputColors() {
  return (
    <div className="w-72 space-y-4">
      <Input color="primary">
        <Input.Field placeholder="Input Primary" />
      </Input>
      <Input color="secondary">
        <Input.Field placeholder="Input Secondary" />
      </Input>
      <Input color="info">
        <Input.Field placeholder="Input Info" />
      </Input>
      <Input color="success">
        <Input.Field placeholder="Input Success" />
      </Input>
      <Input color="warning">
        <Input.Field placeholder="Input Warning" />
      </Input>
      <Input color="error">
        <Input.Field placeholder="Input Error" />
      </Input>
    </div>
  );
}
