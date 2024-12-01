import React from "react";
import { Chip, Button } from "@material-tailwind/react";

export function ChipCustomAnimation() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Chip
        </Button>
      )}
      <Chip
        open={open}
        animate={{
          mount: { y: 0 },
          unmount: { y: 50 },
        }}
        value="Custom Animation"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
