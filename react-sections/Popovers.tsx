import {
  Popover,
  PopoverHandler,
  PopoverContent
} from "../packages/material-tailwind-react/src";
import { Button } from "../packages/material-tailwind-react/src";

export default function Popovers() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Popovers</h2>
      <div className="flex gap-4 justify-between">
        <Popover placement="top">
          <PopoverHandler>
            <Button variant="gradient">Popover On Top</Button>
          </PopoverHandler>
          <PopoverContent>
            This is a very beautiful popover, show some love.
          </PopoverContent>
        </Popover>
        <Popover placement="right">
          <PopoverHandler>
            <Button variant="gradient">Popover On Right</Button>
          </PopoverHandler>
          <PopoverContent>
            This is a very beautiful popover, show some love.
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverHandler>
            <Button variant="gradient">Popover On Bottom</Button>
          </PopoverHandler>
          <PopoverContent>
            This is a very beautiful popover, show some love.
          </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
            <Button variant="gradient">Popover On Left</Button>
          </PopoverHandler>
          <PopoverContent>
            This is a very beautiful popover, show some love.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
