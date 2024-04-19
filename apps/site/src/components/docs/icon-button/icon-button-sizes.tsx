import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export function IconButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <IconButton size="sm">
        <BrightStar className="h-3 w-3 stroke-2" />
      </IconButton>
      <IconButton size="md">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton size="lg">
        <BrightStar className="h-5 w-5 stroke-2" />
      </IconButton>
    </div>
  );
}
