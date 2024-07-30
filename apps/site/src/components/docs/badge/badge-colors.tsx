import { Badge, IconButton } from "@material-tailwind/react";
import { Bell } from "iconoir-react";

export function BadgeColors() {
  return (
    <div className="flex w-full justify-center gap-8">
      <Badge color="primary">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge color="secondary">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge color="info">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge color="success">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge color="warning">
        <Badge.Content>
          <IconButton color="secondary">
            <Bell className="h-4 w-4 stroke-2" />
          </IconButton>
        </Badge.Content>
        <Badge.Indicator>5</Badge.Indicator>
      </Badge>
      <Badge color="error">
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
