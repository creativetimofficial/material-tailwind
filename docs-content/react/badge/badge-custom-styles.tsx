import { Badge, Button } from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/24/outline";

export function BadgeCustomStyles() {
  return (
    <Badge
      content={<CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
      className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
    >
      <Button>Notifications</Button>
    </Badge>
  );
}
