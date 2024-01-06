"use client";
import React from "react";
import { Dialog, Button, IconButton } from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Dialog size="xs">
        <Dialog.Trigger as={Button}>Open Dialog Model</Dialog.Trigger>
        <Dialog.Overlay>
          <Dialog.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            cumque dolorem facere. Molestias odio eaque, deleniti enim expedita
            reiciendis voluptates alias beatae reprehenderit culpa perferendis
            animi, sit nam recusandae ipsum.
            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              isCircular
            >
              <Xmark />
            </Dialog.DismissTrigger>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </div>
  );
}
