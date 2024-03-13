import { IconButton } from "@material-tailwind/react/dist";
import { BrightStar } from "iconoir-react";

export function RoundedIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton isCircular variant="ghost">
        <BrightStar className="w-4 h-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="outline">
        <BrightStar className="w-4 h-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="solid">
        <BrightStar className="w-4 h-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="gradient">
        <BrightStar className="w-4 h-4 stroke-2" />
      </IconButton>
    </div>
  );
}
