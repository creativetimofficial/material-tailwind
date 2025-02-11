import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export default function IconButtonDemo() {
  return (
    <IconButton>
      <BrightStar className="h-4 w-4 stroke-2" />
    </IconButton>
  );
}
