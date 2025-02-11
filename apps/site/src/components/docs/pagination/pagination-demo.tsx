import { Button, IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export default function PaginationDemo() {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost">
        <NavArrowLeft className="mr-1.5 h-4 w-4 stroke-2" />
        Previous
      </Button>
      <IconButton variant="ghost">1</IconButton>
      <IconButton>2</IconButton>
      <IconButton variant="ghost">3</IconButton>
      <IconButton variant="ghost">4</IconButton>
      <IconButton variant="ghost">5</IconButton>
      <Button variant="ghost">
        Next
        <NavArrowRight className="ml-1.5 h-4 w-4 stroke-2" />
      </Button>
    </div>
  );
}
