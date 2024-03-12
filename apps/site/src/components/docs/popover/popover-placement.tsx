import { Popover, Button, Typography } from "@material-tailwind/react/dist";

export function PopoverPlacement() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Popover placement="top">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="top-start">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="top-end">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      </div>

      <div className="mb-3 flex gap-3">
        <Popover placement="right">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="right-start">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="right-end">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="bottom">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="bottom-start">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="bottom-end">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      </div>
      <div className="mb-3 flex gap-3">
        <Popover placement="left">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="left-start">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
        <Popover placement="left-end">
          <Popover.Trigger as={Button}>Popover</Popover.Trigger>
          <Popover.Content className="max-w-sm">
            <Typography type="small" className="text-foreground">
              This is a very beautiful popover, show some love.
            </Typography>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      </div>
    </>
  );
}
