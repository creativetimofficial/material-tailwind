import { Tooltip, Button } from "@material-tailwind/react";

export default function TooltipPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Tooltip placement="top">
          <Tooltip.Trigger as={Button}>Top</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="top-start">
          <Tooltip.Trigger as={Button}>Top Start</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="top-end">
          <Tooltip.Trigger as={Button}>Top End</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div className="mb-3 flex gap-3">
        <Tooltip placement="right">
          <Tooltip.Trigger as={Button}>Right</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="right-start">
          <Tooltip.Trigger as={Button}>Right Start</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="right-end">
          <Tooltip.Trigger as={Button}>Right End</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div className="mb-3 flex gap-3">
        <Tooltip placement="bottom">
          <Tooltip.Trigger as={Button}>Bottom</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="bottom-start">
          <Tooltip.Trigger as={Button}>Bottom Start</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="bottom-end">
          <Tooltip.Trigger as={Button}>Bottom End</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div className="mb-3 flex gap-3">
        <Tooltip placement="left">
          <Tooltip.Trigger as={Button}>Left</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="left-start">
          <Tooltip.Trigger as={Button}>Left Start</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="left-end">
          <Tooltip.Trigger as={Button}>Left End</Tooltip.Trigger>
          <Tooltip.Content>
            Material Tailwind
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </div>
    </>
  );
}
