import { Badge, IconButton } from "@material-tailwind/react";
import { Bell } from "iconoir-react";

export function BadgeDot() {
  return (
    <Badge>
      <Badge.Content>
        <IconButton color="secondary">
          <Bell className="h-4 w-4 stroke-2" />
        </IconButton>
      </Badge.Content>
      <Badge.Indicator />
    </Badge>
  );
}
