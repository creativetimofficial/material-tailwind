import { Badge, Button } from "@material-tailwind/react";

export function BadgePlacement() {
  return (
    <div className="flex items-center gap-4">
      <Badge placement="top-start">
        <Button>Top Start</Button>
      </Badge>
      <Badge placement="top-end">
        <Button>Top End</Button>
      </Badge>
      <Badge placement="bottom-start">
        <Button>Bottom Start</Button>
      </Badge>
      <Badge placement="bottom-end">
        <Button>Bottom End</Button>
      </Badge>
    </div>
  );
}
