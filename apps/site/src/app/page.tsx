"use client";
import React from "react";
import { Tabs } from "@material-tailwind/react/dist";
import { NavArrowDown, Xmark } from "iconoir-react";

export default function Page() {
  return (
    <div className="p-24">
      <Tabs defaultValue="react-v3">
        <Tabs.List className="flex flex-col gap-2">
          <Tabs.Trigger value="react-v1">React v1</Tabs.Trigger>
          <Tabs.Trigger value="react-v2">React v2</Tabs.Trigger>
          <Tabs.Trigger value="react-v3">React v3</Tabs.Trigger>
          <Tabs.Trigger value="react-v4">React v4</Tabs.Trigger>
          <Tabs.Trigger value="react-v5">React v5</Tabs.Trigger>
          <Tabs.TriggerIndicator />
        </Tabs.List>
        <Tabs.Panel value="react-v1">Hello React v1</Tabs.Panel>
        <Tabs.Panel value="react-v2">Hello React v2</Tabs.Panel>
        <Tabs.Panel value="react-v3">Hello React v3</Tabs.Panel>
        <Tabs.Panel value="react-v4">Hello React v4</Tabs.Panel>
        <Tabs.Panel value="react-v5">Hello React v5</Tabs.Panel>
      </Tabs>
    </div>
  );
}
