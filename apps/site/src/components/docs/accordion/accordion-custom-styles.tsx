import { Accordion } from "@material-tailwind/react";
import { NavArrowDown } from "iconoir-react";

export function AccordionCustomStyles() {
  return (
    <Accordion defaultValue="react">
      <Accordion.Item
        value="react"
        className="mb-2 rounded-lg border border-surface p-3"
      >
        <Accordion.Trigger className="p-0">
          Material Tailwind React
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content className="pb-0 pt-3">
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="html"
        className="mb-2 rounded-lg border border-surface p-3"
      >
        <Accordion.Trigger className="p-0">
          Material Tailwind HTML
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content className="pb-0 pt-3">
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="vue"
        className="rounded-lg border border-surface p-3"
      >
        <Accordion.Trigger className="p-0">
          Material Tailwind Vue
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content className="pb-0 pt-3">
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
