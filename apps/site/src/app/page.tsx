"use client";
import React from "react";
import Image from "next/image";
import { Chip, Button } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export default function Page() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex items-end gap-2 p-24">
      <Chip visible={open}>
        <Chip.Icon>
          <ProfileCircle className="h-full w-full stroke-2" />
        </Chip.Icon>
        <Chip.Label>Hello</Chip.Label>
        <Chip.DismissTrigger onClick={() => setOpen(false)}>
          <svg
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-full w-full"
          >
            <path
              d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Chip.DismissTrigger>
      </Chip>
    </div>
  );
}
