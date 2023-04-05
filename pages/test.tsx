import React from "react";
import { IconButton } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import SpeedDial from "packages/material-tailwind-react/src/components/SpeedDial";

export default function Test() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-24">
      <SpeedDial open={open} handler={setOpen} placement="right">
        <SpeedDial.Handler>
          <IconButton size="lg" className="rounded-full">
            <PlusIcon
              strokeWidth={2.5}
              className={`h-4 w-4 transition-transform ${
                open ? "rotate-45" : ""
              }`}
            />
          </IconButton>
        </SpeedDial.Handler>
        <SpeedDial.Content className="flex">
          <SpeedDial.Action>1</SpeedDial.Action>
          <SpeedDial.Action>2</SpeedDial.Action>
          <SpeedDial.Action>3</SpeedDial.Action>
          <SpeedDial.Action>4</SpeedDial.Action>
          <SpeedDial.Action>5</SpeedDial.Action>
        </SpeedDial.Content>
      </SpeedDial>
    </div>
  );
}
