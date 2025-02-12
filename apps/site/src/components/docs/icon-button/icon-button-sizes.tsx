import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export default function IconButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <IconButton size="xs">
        <BrightStar className="h-3.5 w-3.5 stroke-2" />
      </IconButton>
      <IconButton size="sm">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton size="md">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton size="lg">
        <BrightStar className="h-5 w-5 stroke-2" />
      </IconButton>
      <IconButton size="xl">
        <BrightStar className="h-6 w-6 stroke-2" />
      </IconButton>
    </div>
  );
}
