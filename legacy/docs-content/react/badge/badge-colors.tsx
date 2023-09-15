import { Badge, Button } from "@material-tailwind/react";

export function BadgeColors() {
  return (
    <div className="flex items-center gap-4">
      <Badge color="red">
        <Button>Red</Button>
      </Badge>
      <Badge color="green">
        <Button>Green</Button>
      </Badge>
      <Badge color="amber">
        <Button>Amber</Button>
      </Badge>
      <Badge color="purple">
        <Button>Purple</Button>
      </Badge>
    </div>
  );
}
