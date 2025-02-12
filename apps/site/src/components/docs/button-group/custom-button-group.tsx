import { ButtonGroup, Button } from "@material-tailwind/react";
import { Facebook, Dribbble, Linkedin, Instagram } from "iconoir-react";

export default function CustomButtonGroup() {
  return (
    <ButtonGroup>
      <Button className="border-[#1877F2] bg-[#1877F2] text-white hover:border-[#1877F2] hover:bg-[#1877F2] hover:brightness-110">
        <Facebook className="mr-1.5 h-4 w-4 stroke-2" />
        Like
      </Button>
      <Button className="border-[#833ab4] bg-[#833ab4] text-white hover:border-[#833ab4] hover:bg-[#833ab4] hover:brightness-110">
        <Instagram className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
      <Button className="border-[#0a66c2] bg-[#0a66c2] text-white hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:brightness-110">
        <Linkedin className="mr-1.5 h-4 w-4 stroke-2" />
        Connect
      </Button>
      <Button className="border-[#ea4c89] bg-[#ea4c89] text-white hover:border-[#ea4c89] hover:bg-[#ea4c89] hover:brightness-110">
        <Dribbble className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
    </ButtonGroup>
  );
}
