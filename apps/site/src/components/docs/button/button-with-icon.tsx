import { Button } from "@material-tailwind/react";
import {
  NavArrowRight,
  RefreshDouble,
  CloudUpload,
  BrightStar,
} from "iconoir-react";

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="ghost">
        Read More
        <NavArrowRight className="ml-1 h-4 w-4 stroke-2" />
      </Button>
      <Button variant="outline">
        Refresh
        <RefreshDouble className="ml-2 h-4 w-4 stroke-2" />
      </Button>
      <Button variant="solid">
        <CloudUpload className="mr-2 h-4 w-4 stroke-2" />
        Upload Assets
      </Button>
      <Button variant="gradient">
        Give Us Star
        <BrightStar className="ml-2 h-4 w-4 stroke-2" />
      </Button>
    </div>
  );
}
