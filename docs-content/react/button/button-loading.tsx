import { Button } from "@material-tailwind/react";

export function ButtonLoading() {
  return (
    <div className="flex items-center gap-4">
      <Button loading={true}>Loading</Button>
      <Button variant="outlined" loading={true}>
        Loading
      </Button>
      <Button variant="text" loading={true}>
        Loading
      </Button>
      <Button className="rounded-full" loading={true}>
        Loading
      </Button>
    </div>
  );
}
