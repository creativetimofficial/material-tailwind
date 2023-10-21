import React from "react";
import { Chip, Button } from "@material-tailwind/react";

export function ChipDismissible() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Chip
        </Button>
      )}
      <Chip open={open} value="Dismissible" onClose={() => setOpen(false)} />
    </>
  );
}
