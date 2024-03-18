import { ButtonGroup, Button } from "@material-tailwind/react/dist";
import { Facebook, Dribbble, Linkedin, Instagram } from "iconoir-react";

export function CustomButtonGroup() {
  return (
    <ButtonGroup>
      <Button className="border-info bg-info text-secondary hover:border-info-dark hover:bg-info-dark focus:border-info-dark focus:bg-info-dark">
        <Facebook className="mr-1.5 h-4 w-4 stroke-2" />
        Like
      </Button>
      <Button className="border-purple-500 bg-purple-500 text-secondary hover:border-purple-600 hover:bg-purple-600 focus:border-purple-600 focus:bg-purple-600">
        <Instagram className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
      <Button className="border-sky-500 bg-sky-500 text-secondary hover:border-sky-600 hover:bg-sky-600 focus:border-sky-600 focus:bg-sky-600">
        <Linkedin className="mr-1.5 h-4 w-4 stroke-2" />
        Connect
      </Button>
      <Button className="border-pink-500 bg-pink-500 text-secondary hover:border-pink-600 hover:bg-pink-600 focus:border-pink-600 focus:bg-pink-600">
        <Dribbble className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
    </ButtonGroup>
  );
}
