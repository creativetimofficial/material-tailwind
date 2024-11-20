import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export default function PaginationGroup() {
  return (
    <ButtonGroup>
      <IconButton variant="outline">
        <NavArrowLeft className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton variant="outline">1</IconButton>
      <IconButton>2</IconButton>
      <IconButton variant="outline">3</IconButton>
      <IconButton variant="outline">4</IconButton>
      <IconButton variant="outline">5</IconButton>
      <IconButton variant="outline">
        <NavArrowRight className="h-4 w-4 stroke-2" />
      </IconButton>
    </ButtonGroup>
  );
}
