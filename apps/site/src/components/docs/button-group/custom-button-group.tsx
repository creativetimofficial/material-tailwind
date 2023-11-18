import { ButtonGroup, Button } from "@material-tailwind/react/dist";
import { Facebook, Dribbble, Linkedin, Instagram } from "iconoir-react";

export function CustomButtonGroup() {
  return (
    <ButtonGroup>
      <Button className="border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:border-blue-600 focus:bg-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:text-white dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:focus:border-blue-600 dark:focus:bg-blue-600">
        <Facebook className="mr-1.5 h-4 w-4 stroke-2" />
        Like
      </Button>
      <Button className="border-purple-500 bg-purple-500 text-white hover:border-purple-600 hover:bg-purple-600 focus:border-purple-600 focus:bg-purple-600 dark:border-purple-500 dark:bg-purple-500 dark:text-white dark:hover:border-purple-600 dark:hover:bg-purple-600 dark:focus:border-purple-600 dark:focus:bg-purple-600">
        <Instagram className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
      <Button className="border-sky-500 bg-sky-500 text-white hover:border-sky-600 hover:bg-sky-600 focus:border-sky-600 focus:bg-sky-600 dark:border-sky-500 dark:bg-sky-500 dark:text-white dark:hover:border-sky-600 dark:hover:bg-sky-600 dark:focus:border-sky-600 dark:focus:bg-sky-600">
        <Linkedin className="mr-1.5 h-4 w-4 stroke-2" />
        Connect
      </Button>
      <Button className="border-pink-500 bg-pink-500 text-white hover:border-pink-600 hover:bg-pink-600 focus:border-pink-600 focus:bg-pink-600 dark:border-pink-500 dark:bg-pink-500 dark:text-white dark:hover:border-pink-600 dark:hover:bg-pink-600 dark:focus:border-pink-600 dark:focus:bg-pink-600">
        <Dribbble className="mr-1.5 h-4 w-4 stroke-2" />
        Follow
      </Button>
    </ButtonGroup>
  );
}
