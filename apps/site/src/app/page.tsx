"use client";
import React from "react";
import { Collapse, Button } from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" p-24">
      <Button onClick={() => setOpen(!open)}>Open Collapse</Button>
      <Collapse open={open}>
        <div className="rounded-lg bg-gray-50 p-2 shadow-xl shadow-primary-main/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam
          pariatur animi cum labore quidem aspernatur odio quasi natus
          recusandae sunt fuga qui laudantium quis, neque magnam dolor rem vero!
        </div>
      </Collapse>
    </div>
  );
}
