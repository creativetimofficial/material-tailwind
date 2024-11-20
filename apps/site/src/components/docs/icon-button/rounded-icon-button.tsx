import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export default function RoundedIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton isCircular variant="ghost">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="outline">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="solid">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton isCircular variant="gradient">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
