import { Button, Input } from "@material-tailwind/react";

export function InputWithButton() {
  return (
    <form
      action="#"
      className="flex w-full max-w-sm items-center justify-center gap-2"
    >
      <Input>
        <Input.Field type="email" placeholder="someone@example.com" />
      </Input>
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
