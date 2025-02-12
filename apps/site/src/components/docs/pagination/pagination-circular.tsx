import { Button, IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export default function PaginationCircular() {
  return (
    <div className="flex items-center gap-1">
      <Button isPill variant="ghost">
        <NavArrowLeft className="mr-1.5 h-4 w-4 stroke-2" />
        Previous
      </Button>
      <IconButton isCircular variant="ghost">
        1
      </IconButton>
      <IconButton isCircular>2</IconButton>
      <IconButton isCircular variant="ghost">
        3
      </IconButton>
      <IconButton isCircular variant="ghost">
        4
      </IconButton>
      <IconButton isCircular variant="ghost">
        5
      </IconButton>
      <Button isPill variant="ghost">
        Next
        <NavArrowRight className="ml-1.5 h-4 w-4 stroke-2" />
      </Button>
    </div>
  );
}
