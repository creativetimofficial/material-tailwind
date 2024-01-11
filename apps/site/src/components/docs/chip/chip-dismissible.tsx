import * as React from "react";
import { Chip, Button } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export function ChipDismissible() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && <Button onClick={() => setOpen(true)}>Open Chip</Button>}
      <Chip open={open}>
        <Chip.Icon>
          <ProfileCircle className="h-full w-full" />
        </Chip.Icon>
        <Chip.Label>Material Tailwind</Chip.Label>
        <Chip.DismissTrigger onClick={() => setOpen(false)} />
      </Chip>
    </>
  );
}
