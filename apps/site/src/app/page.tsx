"use client";
import * as React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-xs py-12">
      <Drawer>
        <Drawer.Trigger as={Button}>Open drawer</Drawer.Trigger>
        <Drawer.Overlay>
          <Drawer.Panel className="w-80">
            Hello
            <Drawer.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              isCircular
              className="absolute right-2 top-2"
            >
              <Xmark />
            </Drawer.DismissTrigger>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
    </div>
  );
}
