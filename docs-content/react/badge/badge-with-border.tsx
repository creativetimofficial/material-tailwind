import { Badge, Button } from "@material-tailwind/react";

export function BadgeWithBorder() {
  return (
    <Badge content="5" withBorder>
      <Button>Notifications</Button>
    </Badge>
  );
}
