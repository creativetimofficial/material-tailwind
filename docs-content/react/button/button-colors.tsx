import { Button } from "@material-tailwind/react";

export function ButtonColors() {
  return (
    <div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>
    </div>
  );
}
