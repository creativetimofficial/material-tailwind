import { Badge, IconButton } from "@material-tailwind/react";
import { Bell } from "iconoir-react";

export default function BadgePlacement() {
  return (
    <div className="flex w-full justify-center gap-8">
      <Badge placement="top-start">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge placement="top-end">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge placement="bottom-start">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge placement="bottom-end">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
    </div>
  );
}
