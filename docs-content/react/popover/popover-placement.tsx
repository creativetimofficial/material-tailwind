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
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="top-start">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="top-end">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="right">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="right-start">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="right-end">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="bottom">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-start">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-3">
        <Popover placement="left">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="left-start">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
        <Popover placement="left-end">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
