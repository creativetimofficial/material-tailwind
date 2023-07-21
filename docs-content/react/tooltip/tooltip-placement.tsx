import { Tooltip, Button } from "@material-tailwind/react";

export function TooltipPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Tooltip content="Material Tailwind" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </div>
      <div className="mb-3 flex gap-3">
        <Tooltip content="Material Tailwind" placement="right">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="right-start">
          <Button>Right Start</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="right-end">
          <Button>Right End</Button>
        </Tooltip>
      </div>
      <div className="mb-3 flex gap-3">
        <Tooltip content="Material Tailwind" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </div>
      <div className="flex gap-3">
        <Tooltip content="Material Tailwind" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="left-start">
          <Button>Left Start</Button>
        </Tooltip>
        <Tooltip content="Material Tailwind" placement="left-end">
          <Button>Left End</Button>
        </Tooltip>
      </div>
    </>
  );
}
