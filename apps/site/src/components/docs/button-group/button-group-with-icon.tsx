import { ButtonGroup, Button } from "@material-tailwind/react";
import { Bold, Italic, Underline } from "iconoir-react";

export function ButtonGroupWithIcon() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup variant="ghost">
        <Button>
          <Bold className="mr-1.5 h-4 w-4 stroke-2" />
          Bold
        </Button>
        <Button>
          <Italic className="mr-1.5 h-4 w-4 stroke-2" />
          Italic
        </Button>
        <Button>
          <Underline className="mr-1.5 h-4 w-4 stroke-2" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="outline">
        <Button>
          <Bold className="mr-1.5 h-4 w-4 stroke-2" />
          Bold
        </Button>
        <Button>
          <Italic className="mr-1.5 h-4 w-4 stroke-2" />
          Italic
        </Button>
        <Button>
          <Underline className="mr-1.5 h-4 w-4 stroke-2" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="solid">
        <Button>
          <Bold className="mr-1.5 h-4 w-4 stroke-2" />
          Bold
        </Button>
        <Button>
          <Italic className="mr-1.5 h-4 w-4 stroke-2" />
          Italic
        </Button>
        <Button>
          <Underline className="mr-1.5 h-4 w-4 stroke-2" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="gradient">
        <Button>
          <Bold className="mr-1.5 h-4 w-4 stroke-2" />
          Bold
        </Button>
        <Button>
          <Italic className="mr-1.5 h-4 w-4 stroke-2" />
          Italic
        </Button>
        <Button>
          <Underline className="mr-1.5 h-4 w-4 stroke-2" />
          Underline
        </Button>
      </ButtonGroup>
    </div>
  );
}
