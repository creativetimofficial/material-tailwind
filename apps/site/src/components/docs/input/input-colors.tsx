import { Input } from "@material-tailwind/react/dist";

export function InputColors() {
  return (
    <div className="w-[240px] space-y-4">
      <Input color="primary" placeholder="Input Primary" />
      <Input color="secondary" placeholder="Input Secondary" />
      <Input color="info" placeholder="Input Info" />
      <Input color="success" placeholder="Input Success" />
      <Input color="warning" placeholder="Input Warning" />
      <Input color="error" placeholder="Input Error" />
    </div>
  );
}
