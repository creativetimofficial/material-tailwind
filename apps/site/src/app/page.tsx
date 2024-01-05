"use client";
import React from "react";
import { Tooltip, Button } from "@material-tailwind/react/dist";
import { Star } from "iconoir-react";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Tooltip>
        <Tooltip.Trigger as={Button} color="error">
          Open Tooltip
        </Tooltip.Trigger>
        <Tooltip.Content modal>
          Hello World
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}
