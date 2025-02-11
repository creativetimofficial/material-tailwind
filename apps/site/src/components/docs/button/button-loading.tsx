import { Button, Spinner } from "@material-tailwind/react";

export default function ButtonLoading() {
  return (
    <div className="item flex flex-wrap justify-center gap-4">
      <Button variant="ghost" className="gap-2">
        <Spinner size="sm" />
        Loading
      </Button>
      <Button variant="outline" className="gap-2">
        <Spinner size="sm" />
        Loading
      </Button>
      <Button variant="solid" className="gap-2">
        <Spinner size="sm" />
        Loading
      </Button>
      <Button variant="gradient" className="gap-2">
        <Spinner size="sm" />
        Loading
      </Button>
    </div>
  );
}
