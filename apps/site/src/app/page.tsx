"use client";
import React from "react";
import { Select, Button } from "@material-tailwind/react/dist";
import { Star } from "iconoir-react";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Select isPill>
        <Select.Trigger placeholder="Select" />
        <Select.List>
          <Select.Option indicator={<Star className="h-5 w-5" />}>
            Item 1
          </Select.Option>
          <Select.Option>Item 2</Select.Option>
          <Select.Option>Item 3</Select.Option>
        </Select.List>
      </Select>
    </div>
  );
}
