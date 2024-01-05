"use client";
import React from "react";
import { Popover, Button } from "@material-tailwind/react/dist";
import { Star } from "iconoir-react";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Popover>
        <Popover.Trigger as={Button}>Open Popover</Popover.Trigger>
        <Popover.Content modal>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          sequi.
          <Popover>
            <Popover.Trigger as={Button}>Open Popover</Popover.Trigger>
            <Popover.Content modal>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              sequi.
              <Popover.Arrow />
            </Popover.Content>
          </Popover>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  );
}
