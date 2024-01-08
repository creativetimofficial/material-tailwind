"use client";
import React from "react";
import { Accordion, Button } from "@material-tailwind/react/dist";
import { NavArrowDown, Xmark } from "iconoir-react";

export default function Page() {
  return (
    <div className="p-24">
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger className="flex justify-between">
            <div>Item 1</div>
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Content 1</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger className="flex justify-between">
            <div>Item 2</div>
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Content 2</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="3">
          <Accordion.Trigger className="flex justify-between">
            <div>Item 3</div>
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Content 3</div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
