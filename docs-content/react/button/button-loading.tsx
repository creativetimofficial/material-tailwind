import { Button } from "@material-tailwind/react";

export function ButtonLoading() {
  return (
    <div className="flex items-center gap-4">
      <Button loading>Loading</Button>
      <Button variant="outlined" loading>
        Loading
      </Button>
      <Button variant="text" loading>
        Loading
      </Button>
      <Button className="rounded-full" loading>
        Loading
      </Button>
    </div>
  );
}
