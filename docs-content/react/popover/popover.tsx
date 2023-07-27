import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export function PopoverDefault() {
  return (
    <Popover>
      <PopoverHandler>
        <Button>Show Popover</Button>
      </PopoverHandler>
      <PopoverContent>
        This is a very beautiful popover, show some love.
      </PopoverContent>
    </Popover>
  );
}
