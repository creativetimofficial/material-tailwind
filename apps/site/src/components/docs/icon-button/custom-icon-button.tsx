import { IconButton } from "@material-tailwind/react";
import { Github, Dribbble, Facebook } from "iconoir-react";

export default function CustomIconButton() {
  return (
    <div className="flex gap-4">
      <IconButton className="border-[#24292e] bg-[#24292e] text-white hover:border-[#24292e] hover:bg-[#24292e] hover:brightness-110">
        <Github className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-[#ea4c89] bg-[#ea4c89] text-white hover:border-[#ea4c89] hover:bg-[#ea4c89] hover:brightness-110">
        <Dribbble className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton className="border-[#1877F2] bg-[#1877F2] text-white hover:border-[#1877F2] hover:bg-[#1877F2] hover:brightness-110">
        <Facebook className="h-4 w-4 stroke-2" />
      </IconButton>
    </div>
  );
}
