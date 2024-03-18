import { IconButton } from "@material-tailwind/react/dist";
import { Github, Dribbble, Facebook } from "iconoir-react";

export function CustomIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton className="border-black bg-black text-white hover:border-black/90 hover:bg-black/90 focus:border-black/90 focus:bg-black/90">
        <Github className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-pink-500 bg-pink-500 text-white hover:border-pink-600 hover:bg-pink-600 focus:border-pink-600 focus:bg-pink-600">
        <Dribbble className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:border-blue-600 focus:bg-blue-600">
        <Facebook className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
