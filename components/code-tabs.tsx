import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";

interface Props {
  children: React.ReactNode[];
}

export default function CodeTabs({ children }: Props) {
  return (
    <Tabs value={1} className="my-4 overflow-visible rounded-lg bg-[#1e293b]">
      <TabsHeader
        className="rounded-none border-b border-white/10 bg-transparent"
        indicatorProps={{
          className: "bg-gradient-to-tr from-pink-600 to-pink-400",
        }}
      >
        <Tab value={1} className="text-white">
          Material Tailwind
        </Tab>
        <Tab value={2} className="text-white">
          Tailwind CSS
        </Tab>
      </TabsHeader>
      <TabsBody
        className="overflow-visible"
        animate={{
          mount: {
            transition: false,
            position: "relative",
            display: "block",
          },
          unmount: {
            transition: false,
            position: "relative",
            display: "none",
          },
        }}
      >
        {children.map((el) =>
          React.cloneElement(el as any, {
            className: "p-0",
          })
        )}
      </TabsBody>
    </Tabs>
  );
}
