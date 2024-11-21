import { Badge, IconButton } from "@material-tailwind/react";
import { Bell, Check } from "iconoir-react";

export function BadgeCustomStyles() {
  return (
    <Badge>
      <Badge.Content>
        <IconButton color="secondary">
          <Bell className="h-4 w-4 stroke-2" />
        </IconButton>
      </Badge.Content>
      <Badge.Indicator className="border-white bg-black px-1 py-1 shadow-lg shadow-black/25">
        <Check className="h-3 w-3 stroke-2" />
      </Badge.Indicator>
    </Badge>
  );
}
