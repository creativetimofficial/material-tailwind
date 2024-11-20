import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export default function IconButtonVariants() {
  return (
    <div className="flex gap-4">
      <IconButton variant="ghost">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton variant="outline">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton variant="solid">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton variant="gradient">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
