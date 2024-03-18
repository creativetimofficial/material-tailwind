import { IconButton } from "@material-tailwind/react/dist";
import { Github, Dribbble, Facebook } from "iconoir-react";

export function CustomIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton className="border-primary bg-primary text-secondary hover:border-primary/90 hover:bg-primary/90 focus:border-primary/90 focus:bg-primary/90">
        <Github className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-pink-500 bg-pink-500 text-secondary hover:border-pink-600 hover:bg-pink-600 focus:border-pink-600 focus:bg-pink-600">
        <Dribbble className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-info bg-info text-secondary hover:border-info-dark hover:bg-info-dark focus:border-info-dark focus:bg-info-dark">
        <Facebook className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
