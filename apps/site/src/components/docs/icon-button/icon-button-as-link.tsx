import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export function IconButtonAsLink() {
  return (
    <div className="flex gap-4">
      <IconButton as="a" href="#" variant="ghost">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton as="a" href="#" variant="outline">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton as="a" href="#" variant="solid">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton as="a" href="#" variant="gradient">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
