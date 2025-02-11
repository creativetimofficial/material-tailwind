import { IconButton } from "@material-tailwind/react";
import { BrightStar } from "iconoir-react";

export default function IconButtonColors() {
  return (
    <div className="flex gap-4">
      <IconButton color="primary">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton color="secondary">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton color="info">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton color="success">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton color="warning">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton color="error">
        <BrightStar className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
