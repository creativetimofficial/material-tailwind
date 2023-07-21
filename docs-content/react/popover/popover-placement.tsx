import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export function PopoverPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Popover placement="top">
          <PopoverHandler>
            <Button>Top</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="top-start">
          <PopoverHandler>
            <Button>Top Start</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="top-end">
          <PopoverHandler>
            <Button>Top End</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="right">
          <PopoverHandler>
            <Button>Right</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="right-start">
          <PopoverHandler>
            <Button>Right Start</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="right-end">
          <PopoverHandler>
            <Button>Right End</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="bottom">
          <PopoverHandler>
            <Button>Bottom</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-start">
          <PopoverHandler>
            <Button>Bottom Start</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverHandler>
            <Button>Bottom End</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-3">
        <Popover placement="left">
          <PopoverHandler>
            <Button>Left</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="left-start">
          <PopoverHandler>
            <Button>Left Start</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="left-end">
          <PopoverHandler>
            <Button>Left End</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
