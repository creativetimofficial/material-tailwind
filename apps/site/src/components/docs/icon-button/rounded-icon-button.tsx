import { IconButton } from "@material-tailwind/react/dist";
import { BrightStar } from "iconoir-react";

export function RoundedIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton rounded variant="ghost">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton rounded variant="outline">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton rounded variant="solid">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton rounded variant="gradient">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
