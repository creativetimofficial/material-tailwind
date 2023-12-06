import { Button, Input } from "@material-tailwind/react/dist";

export function InputWithButton() {
  return (
    <form action="#" className="flex w-full items-center justify-center gap-2">
      <Input type="email" placeholder="someone@example.com" />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
